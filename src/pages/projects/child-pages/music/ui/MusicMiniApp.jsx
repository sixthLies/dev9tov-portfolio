import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { loadLibrary } from "../lib/utils/loadLibrary"
import { useAudioPlayer } from "../lib/hooks/useAudioPlayer"
import PlaylistGrid from "./components/PlaylistGrid/PlaylistGrid.jsx"
import PlaylistModal from "./components/PlaylistModal/PlaylistModal.jsx"
import Search from "./components/Search/Search.jsx"
import SearchResults from "./components/SearchResults/SearchResults.jsx"
import MiniPlayer from "./components/MiniPlayer/MiniPlayer.jsx"
import "../styles/global.scss"
import "../styles/App.scss"
import { InfoBlock } from "@/shared/ui"
import { infoBoxContactsData } from "@/pages/contacts/model/infoBox"

export const MusicMiniApp = () => {
  const [library, setLibrary] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notification, setNotification] = useState(null)

  const audioPlayer = useAudioPlayer()

  // Filter tracks across all playlists based on search query (real-time)
  const searchResults = useMemo(() => {
    if (!library || !searchQuery.trim()) return null

    const query = searchQuery.trim().toLowerCase()
    const results = []

    library.playlists.forEach((playlist) => {
      playlist.tracks.forEach((track) => {
        if (
          track.title.toLowerCase().includes(query) ||
          (track.genre && track.genre.toLowerCase().includes(query))
        ) {
          results.push({
            track,
            playlistId: playlist.id,
            playlistTitle: playlist.title,
            playlist,
          })
        }
      })
    })

    return results
  }, [library, searchQuery])

  const isSearchActive = searchQuery.trim().length > 0

  // Ref to store the element that triggered the modal open, for focus restoration
  const triggerElementRef = useRef(null)

  const handlePlaylistClick = useCallback((playlist) => {
    // Store the currently focused element (the card that was clicked)
    triggerElementRef.current = document.activeElement
    setSelectedPlaylist(playlist)
    setIsModalOpen(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false)
    // Restore focus to the element that triggered the modal
    requestAnimationFrame(() => {
      if (
        triggerElementRef.current &&
        typeof triggerElementRef.current.focus === "function"
      ) {
        triggerElementRef.current.focus()
      }
    })
  }, [])

  const handleTrackPlay = useCallback(
    (track, playlist) => {
      audioPlayer.playTrack(track, playlist)
    },
    [audioPlayer.playTrack],
  )

  const handleSearchResultClick = useCallback(
    (result) => {
      if (!result?.track || !result?.playlist) return
      audioPlayer.playTrack(result.track, result.playlist)
    },
    [audioPlayer.playTrack],
  )

  const handleAddToQueue = useCallback(
    (track, playlist) => {
      // Check if the track is already in the queue to show appropriate feedback
      const alreadyQueued = audioPlayer.queue.some(
        (q) => q.track.id === track.id,
      )
      audioPlayer.addToQueue(track, playlist)
      if (alreadyQueued) {
        setNotification(`"${track.title}" is already in queue`)
      } else {
        setNotification(`"${track.title}" added to queue`)
      }
      setTimeout(() => setNotification(null), 2000)
    },
    [audioPlayer.addToQueue, audioPlayer.queue],
  )

  // Show error notification when an audio error occurs
  useEffect(() => {
    if (audioPlayer.audioError) {
      setNotification(audioPlayer.audioError.message)
      const timer = setTimeout(() => setNotification(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [audioPlayer.audioError])

  const handleMiniPlayerExpand = useCallback(() => {
    if (audioPlayer.currentPlaylist) {
      triggerElementRef.current = document.activeElement
      setSelectedPlaylist(audioPlayer.currentPlaylist)
      setIsModalOpen(true)
    }
  }, [audioPlayer.currentPlaylist])

  const fetchLibrary = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await loadLibrary()
      setLibrary(data)
    } catch (err) {
      console.error("Failed to load library:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLibrary()
  }, [])

  if (loading) {
    return (
      <div className="music-mini-app">
        <div className="app">
          <div className="app__loading">
            <div className="app__loading-spinner" aria-hidden="true"></div>
            <p>Loading music library...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="music-mini-app">
        <div className="app">
          <div className="app__error" role="alert">
            <div className="app__error-icon" aria-hidden="true">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 7v6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16.5" r="0.75" fill="currentColor" />
              </svg>
            </div>
            <h2>Unable to load music library</h2>
            <p>{error}</p>
            <button
              className="app__error-retry"
              onClick={fetchLibrary}
              type="button"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="music-mini-app">
      <InfoBlock data={infoBoxContactsData} />
      <div className="app">
        <header className="app__header">
          <Search
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />
        </header>
        <main className="app__main">
          {isSearchActive ? (
            <SearchResults
              results={searchResults}
              searchQuery={searchQuery.trim()}
              onResultClick={handleSearchResultClick}
            />
          ) : (
            <PlaylistGrid
              playlists={library.playlists}
              currentPlaylistId={audioPlayer.currentPlaylist?.id || null}
              onPlaylistClick={handlePlaylistClick}
            />
          )}
        </main>
        <footer className="app__footer">
          <MiniPlayer
            track={audioPlayer.currentTrack}
            playlist={audioPlayer.currentPlaylist}
            isVisible={!!audioPlayer.currentTrack && !isModalOpen}
            isPlaying={audioPlayer.isPlaying}
            isLoading={audioPlayer.isLoading}
            audioError={audioPlayer.audioError}
            currentTime={audioPlayer.currentTime}
            duration={audioPlayer.duration}
            volume={audioPlayer.volume}
            isMuted={audioPlayer.isMuted}
            repeatMode={audioPlayer.repeatMode}
            onTogglePlay={audioPlayer.togglePlay}
            onSeek={audioPlayer.seek}
            onVolumeChange={audioPlayer.setVolume}
            onToggleMute={audioPlayer.toggleMute}
            onSkipNext={audioPlayer.skipNext}
            onExpand={handleMiniPlayerExpand}
            onToggleRepeat={audioPlayer.toggleRepeat}
          />
        </footer>
        <PlaylistModal
          playlist={selectedPlaylist}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onTrackPlay={handleTrackPlay}
          onAddToQueue={handleAddToQueue}
          currentTrack={audioPlayer.currentTrack}
          isPlaying={audioPlayer.isPlaying}
          isLoading={audioPlayer.isLoading}
          audioError={audioPlayer.audioError}
          currentTime={audioPlayer.currentTime}
          duration={audioPlayer.duration}
          onTogglePlay={audioPlayer.togglePlay}
          onSeek={audioPlayer.seek}
          queue={audioPlayer.queue}
          analyserNode={audioPlayer.analyserNode}
        />
        {notification && (
          <div className="app__notification" role="status" aria-live="polite">
            {notification}
          </div>
        )}
      </div>
    </div>
  )
}
