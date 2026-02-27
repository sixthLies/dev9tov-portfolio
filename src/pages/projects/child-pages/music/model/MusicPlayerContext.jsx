import { createContext, useContext, useState } from "react"
import { useAudioPlayer } from "../lib/hooks/useAudioPlayer"

const MusicPlayerContext = createContext(null)

export const MusicPlayerProvider = ({ children }) => {
  const audioPlayer = useAudioPlayer()
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false)

  const value = {
    ...audioPlayer,
    selectedPlaylist,
    setSelectedPlaylist,
    isPlaylistModalOpen,
    setIsPlaylistModalOpen,
  }

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  )
}

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext)

  if (!context) {
    throw new Error("useMusicPlayer must be used within MusicPlayerProvider")
  }

  return context
}

