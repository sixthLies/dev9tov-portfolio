import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * useAudioPlayer - Custom hook for managing audio playback
 * Handles play/pause, seek, volume, time tracking, auto-play next,
 * and Web Audio API analyser for waveform visualization
 */
export function useAudioPlayer() {
  const INITIAL_VOLUME = 0.25
  const audioRef = useRef(null)
  const audioContextRef = useRef(null)
  const analyserRef = useRef(null)
  const sourceRef = useRef(null)
  // Ref to track current track ID synchronously (avoids React state batch delay)
  const currentTrackIdRef = useRef(null)
  // Guard against concurrent playTrack calls (e.g., rapid double-click)
  const playInProgressRef = useRef(false)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [currentPlaylist, setCurrentPlaylist] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [audioError, setAudioError] = useState(null) // { trackId, message }
  const [volume, setVolumeState] = useState(INITIAL_VOLUME)
  const [isMuted, setIsMuted] = useState(false)
  const [queue, setQueue] = useState([])
  const [repeatMode, setRepeatMode] = useState('off') // 'off', 'repeat-all', 'repeat-one'
  const [analyserNode, setAnalyserNode] = useState(null)
  // Track the playlist and index to resume after queue drains
  const playlistResumeRef = useRef(null) // { playlist, index }

  // Initialize Web Audio API analyser (lazy, on first play interaction)
  const initAudioContext = useCallback(() => {
    if (audioContextRef.current) return // Already initialized

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      const ctx = new AudioCtx()
      audioContextRef.current = ctx

      const analyser = ctx.createAnalyser()
      analyser.fftSize = 256
      analyser.smoothingTimeConstant = 0.8
      analyserRef.current = analyser

      // Connect audio element to analyser -> destination
      const source = ctx.createMediaElementSource(audioRef.current)
      source.connect(analyser)
      analyser.connect(ctx.destination)
      sourceRef.current = source

      setAnalyserNode(analyser)
    } catch (err) {
      console.warn('Web Audio API not available for waveform:', err)
    }
  }, [])

  // Initialize audio element once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.volume = INITIAL_VOLUME
      audioRef.current.crossOrigin = 'anonymous'
    }

    const audio = audioRef.current
    window.__testAudio = audio

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      // Only update duration from audio metadata if we don't already have
      // a duration from library.json (track.duration), or use the larger value
      // to prefer the library metadata over short placeholder audio files
      setDuration(prev => {
        if (prev > 0 && prev > audio.duration) {
          // Keep the library.json duration (already set from track.duration)
          return prev
        }
        return audio.duration
      })
      setIsLoading(false)
    }

    const handleCanPlay = () => {
      setIsLoading(false)
      setAudioError(null) // Clear any previous error on successful load
    }

    const handleWaiting = () => {
      setIsLoading(true)
    }

    const handleError = (e) => {
      console.error('Audio error:', e)
      setIsLoading(false)
      setIsPlaying(false)
      // Determine a user-friendly error message based on the error code
      const mediaError = audio.error
      let message = 'Unable to play this track'
      if (mediaError) {
        switch (mediaError.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            message = 'Playback was interrupted'
            break
          case MediaError.MEDIA_ERR_NETWORK:
            message = 'A network error occurred while loading the track'
            break
          case MediaError.MEDIA_ERR_DECODE:
            message = 'This audio file could not be decoded'
            break
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            message = 'This audio file is missing or unsupported'
            break
        }
      }
      setAudioError({ trackId: audio.src, message })
    }

    const handlePlay = () => {
      setIsPlaying(true)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('waiting', handleWaiting)
    audio.addEventListener('error', handleError)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('waiting', handleWaiting)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  // Play next track (from queue first, then playlist)
  const playNext = useCallback(() => {
    // Repeat one: replay the same track
    if (repeatMode === 'repeat-one' && currentTrack && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(console.error)
      return
    }

    if (queue.length > 0) {
      // Before playing from queue, save the resume position in the original playlist
      // so we can continue from the right place after the queue drains
      if (!playlistResumeRef.current && currentPlaylist && currentTrack) {
        const currentIndex = currentPlaylist.tracks.findIndex(
          t => t.id === currentTrack.id
        )
        playlistResumeRef.current = {
          playlist: currentPlaylist,
          index: currentIndex + 1, // resume from the next track after the one that was playing
        }
      }
      const nextFromQueue = queue[0]
      setQueue(prev => prev.slice(1))
      playTrack(nextFromQueue.track, nextFromQueue.playlist)
      return
    }

    // Queue is empty - check if we need to resume the original playlist
    if (playlistResumeRef.current) {
      const { playlist, index } = playlistResumeRef.current
      playlistResumeRef.current = null // Clear the resume point
      if (index < playlist.tracks.length) {
        playTrack(playlist.tracks[index], playlist)
        return
      } else if (repeatMode === 'repeat-all' && playlist.tracks.length > 0) {
        playTrack(playlist.tracks[0], playlist)
        return
      }
      // If index is past end and no repeat, stop playback
      return
    }

    if (currentPlaylist && currentTrack) {
      const currentIndex = currentPlaylist.tracks.findIndex(
        t => t.id === currentTrack.id
      )
      if (currentIndex >= 0 && currentIndex < currentPlaylist.tracks.length - 1) {
        const nextTrack = currentPlaylist.tracks[currentIndex + 1]
        playTrack(nextTrack, currentPlaylist)
      } else if (repeatMode === 'repeat-all' && currentPlaylist.tracks.length > 0) {
        // Loop back to first track in playlist
        playTrack(currentPlaylist.tracks[0], currentPlaylist)
      }
    }
  }, [queue, currentPlaylist, currentTrack, repeatMode])

  // Re-attach the ended handler when playNext changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setIsPlaying(false)
      playNext()
    }

    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [playNext])

  const playTrack = useCallback((track, playlist) => {
    const audio = audioRef.current
    if (!audio) return

    // Initialize Web Audio API on first user interaction (browser requirement)
    initAudioContext()

    // Resume audio context if suspended (browser autoplay policy)
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(console.warn)
    }

    // If same track (using ref for synchronous check to handle rapid clicks),
    // just toggle play/pause - no duplicate audio instance
    if (currentTrackIdRef.current === track.id) {
      if (audio.paused) {
        audio.play().catch(console.error)
      } else {
        audio.pause()
      }
      return
    }

    // Guard against duplicate playTrack calls for the same new track
    // (e.g., rapid double-click before React state updates)
    if (playInProgressRef.current) return
    playInProgressRef.current = true

    // New track - update ref immediately (synchronous) to prevent race conditions
    currentTrackIdRef.current = track.id
    setCurrentTrack(track)
    setCurrentPlaylist(playlist)
    setIsLoading(true)
    setAudioError(null) // Clear any previous error
    setCurrentTime(0)
    // Use the track's duration from library.json as the initial duration,
    // which will be updated by audio metadata when available
    setDuration(track.duration || 0)

    audio.src = track.audioFile
    audio.load()
    audio.play().catch((err) => {
      console.error('Playback failed:', err)
      setIsLoading(false)
    }).finally(() => {
      playInProgressRef.current = false
    })
  }, [currentTrack, initAudioContext])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    // Resume audio context if suspended
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume().catch(console.warn)
    }

    if (audio.paused) {
      audio.play().catch(console.error)
    } else {
      audio.pause()
    }
  }, [currentTrack])

  const seek = useCallback((time) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = time
    setCurrentTime(time)
  }, [])

  const setVolume = useCallback((vol) => {
    const audio = audioRef.current
    if (!audio) return
    const clampedVol = Math.max(0, Math.min(1, vol))
    audio.volume = clampedVol
    setVolumeState(clampedVol)
    if (clampedVol > 0 && isMuted) {
      setIsMuted(false)
    }
  }, [isMuted])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isMuted) {
      audio.volume = volume
      setIsMuted(false)
    } else {
      audio.volume = 0
      setIsMuted(true)
    }
  }, [isMuted, volume])

  const addToQueue = useCallback((track, playlist) => {
    setQueue(prev => {
      // Prevent duplicate entries for the same track
      if (prev.some(q => q.track.id === track.id)) {
        return prev
      }
      return [...prev, { track, playlist }]
    })
  }, [])

  // Toggle repeat mode: off -> repeat-all -> repeat-one -> off
  const toggleRepeat = useCallback(() => {
    setRepeatMode(prev => {
      if (prev === 'off') return 'repeat-all'
      if (prev === 'repeat-all') return 'repeat-one'
      return 'off'
    })
  }, [])

  const skipNext = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    playNext()
  }, [playNext])

  return {
    currentTrack,
    currentPlaylist,
    isPlaying,
    currentTime,
    duration,
    isLoading,
    audioError,
    volume,
    isMuted,
    queue,
    repeatMode,
    analyserNode,
    playTrack,
    togglePlay,
    seek,
    setVolume,
    toggleMute,
    addToQueue,
    skipNext,
    playNext,
    toggleRepeat,
  }
}
