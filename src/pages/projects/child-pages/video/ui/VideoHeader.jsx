import React from "react"
import { InfoBlock, Reveal } from "@/shared/ui"
import { infoBoxVideoData } from "../model/video.infoBox"

export function VideoHeader() {
  return (
    <>
      <Reveal as="h2" className="video__title" preset="text">
        {"\u0410\u0440\u0445\u0438\u0432 \u0412\u0438\u0434\u0435\u043e\u0437\u0430\u043f\u0438\u0441\u0435\u0439"}
      </Reveal>
      <InfoBlock data={infoBoxVideoData} revealIndex={1} />
    </>
  )
}
