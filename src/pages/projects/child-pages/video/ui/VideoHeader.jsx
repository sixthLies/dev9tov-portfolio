import React from "react"
import { InfoBlock } from "@/shared/ui"
import { infoBoxVideoData } from "../model/video.infoBox"

export function VideoHeader() {
  return (
    <>
      <h2 className="video__title">Архив Видеозаписей</h2>
      <InfoBlock data={infoBoxVideoData} />
    </>
  )
}
