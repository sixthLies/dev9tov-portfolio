import { useCallback } from "react"
import { useLocation, useNavigate } from "react-router"
import { PROJECTS_CHILD_PATHS, ROUTE_PATHS } from "../routing/const/paths"
import MiniPlayer from "@/pages/projects/child-pages/music/ui/components/MiniPlayer/MiniPlayer.jsx"
import { useMusicPlayer } from "@/pages/projects/child-pages/music/model/MusicPlayerContext"

const MUSIC_ROUTE_PATH = `${ROUTE_PATHS.projects}/${PROJECTS_CHILD_PATHS.music}`

export const GlobalMusicMiniPlayer = () => {
  const musicPlayer = useMusicPlayer()
  const navigate = useNavigate()
  const location = useLocation()
  const {
    currentPlaylist,
    setSelectedPlaylist,
    setIsPlaylistModalOpen,
  } = musicPlayer

  const isOnMusicPage =
    location.pathname === MUSIC_ROUTE_PATH ||
    location.pathname.startsWith(`${MUSIC_ROUTE_PATH}/`)

  const handleExpand = useCallback(() => {
    if (!currentPlaylist) return

    setSelectedPlaylist(currentPlaylist)
    setIsPlaylistModalOpen(true)

    if (!isOnMusicPage) {
      navigate(MUSIC_ROUTE_PATH)
    }
  }, [
    currentPlaylist,
    isOnMusicPage,
    navigate,
    setIsPlaylistModalOpen,
    setSelectedPlaylist,
  ])

  const isVisible =
    Boolean(musicPlayer.currentTrack) &&
    !(isOnMusicPage && musicPlayer.isPlaylistModalOpen)

  return (
    <div className="music-mini-app">
      <MiniPlayer
        track={musicPlayer.currentTrack}
        playlist={musicPlayer.currentPlaylist}
        isVisible={isVisible}
        isPlaying={musicPlayer.isPlaying}
        isLoading={musicPlayer.isLoading}
        audioError={musicPlayer.audioError}
        currentTime={musicPlayer.currentTime}
        duration={musicPlayer.duration}
        volume={musicPlayer.volume}
        isMuted={musicPlayer.isMuted}
        repeatMode={musicPlayer.repeatMode}
        onTogglePlay={musicPlayer.togglePlay}
        onSeek={musicPlayer.seek}
        onVolumeChange={musicPlayer.setVolume}
        onToggleMute={musicPlayer.toggleMute}
        onSkipNext={musicPlayer.skipNext}
        onExpand={handleExpand}
        onToggleRepeat={musicPlayer.toggleRepeat}
      />
    </div>
  )
}
