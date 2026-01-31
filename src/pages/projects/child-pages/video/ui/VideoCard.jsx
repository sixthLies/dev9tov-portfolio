import React from "react"
import { formatDuration, formatViews } from "../model"

export const VideoCard = ({ video, onOpen, onKeyDown }) => {
  return (
    <button
      key={video.id}
      type="button"
      className="videoCard"
      onClick={() => onOpen(video)}
      onKeyDown={onKeyDown(video)}
      aria-label={`Открыть видео: ${video.title}`}
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
          aria-label={`Длительность ${formatDuration(video.duration)}`}
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
          aria-label={`Просмотров ${video.views}`}
        >
          {formatViews(video.views)} просмотров
        </span>
      </span>
    </button>
  )
}
