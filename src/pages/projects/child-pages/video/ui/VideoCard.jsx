import React from "react"
import { Reveal } from "@/shared/ui"
import { formatDuration, formatViews } from "../model"

export const VideoCard = ({ video, index = 0, onOpen, onKeyDown }) => {
  return (
    <Reveal
      as="button"
      type="button"
      className="videoCard"
      preset="media"
      index={index}
      onClick={() => onOpen(video)}
      onKeyDown={onKeyDown(video)}
      aria-label={`\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u0438\u0434\u0435\u043e: ${video.title}`}
      role="listitem"
    >
      <span className="videoCard__thumbWrap">
        <img
          className="videoCard__thumb"
          src={video.thumbUrl}
          alt=""
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <span
          className="videoCard__duration"
          aria-label={`\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c ${formatDuration(video.duration)}`}
        >
          {formatDuration(video.duration)}
        </span>
      </span>

      <span className="videoCard__meta">
        <span className="videoCard__title" title={video.title}>
          {video.title}
        </span>
        <span
          className="videoCard__views"
          aria-label={`\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 ${video.views}`}
        >
          {formatViews(video.views)} {"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}
        </span>
      </span>
    </Reveal>
  )
}
