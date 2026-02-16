import React from "react"
import { useVideoPageLogic } from "../lib"
import { VideoHeader, VideoGallery } from "./"

export const VideoPage = () => {
  const logic = useVideoPageLogic()

  return (
    <section className="video l-page-section">
      <VideoHeader />
      <VideoGallery {...logic} />
    </section>
  )
}
