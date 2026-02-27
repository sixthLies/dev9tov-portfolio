import React from "react"
import { Reveal } from "@/shared/ui"
import "./PlaylistGrid.scss"

/**
 * PlaylistGrid - Displays themed playlists as a responsive card grid
 * Each card shows cover image, title, and short description
 */
function PlaylistGrid({ playlists, currentPlaylistId, onPlaylistClick }) {
  return (
    <div className="playlist-grid" role="list" aria-label="Music playlists">
      {playlists.map((playlist, index) => (
        <Reveal
          as="div"
          key={playlist.id}
          preset="card"
          index={index}
          className={`playlist-card ${currentPlaylistId === playlist.id ? "playlist-card--active" : ""}`}
          role="listitem"
          tabIndex={0}
          aria-label={`${playlist.title} - ${playlist.description}${currentPlaylistId === playlist.id ? " (Now Playing)" : ""}`}
          onClick={() => onPlaylistClick(playlist)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onPlaylistClick(playlist)
            }
          }}
        >
          {currentPlaylistId === playlist.id && (
            <div className="playlist-card__now-playing" aria-label="Now playing">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <rect x="4" y="14" width="3" height="6" rx="1">
                  <animate
                    attributeName="height"
                    values="6;12;6"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    values="14;8;14"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="10.5" y="10" width="3" height="10" rx="1">
                  <animate
                    attributeName="height"
                    values="10;4;10"
                    dur="0.8s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                  <animate
                    attributeName="y"
                    values="10;16;10"
                    dur="0.8s"
                    repeatCount="indefinite"
                    begin="0.2s"
                  />
                </rect>
                <rect x="17" y="12" width="3" height="8" rx="1">
                  <animate
                    attributeName="height"
                    values="8;14;8"
                    dur="0.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                  <animate
                    attributeName="y"
                    values="12;6;12"
                    dur="0.8s"
                    repeatCount="indefinite"
                    begin="0.4s"
                  />
                </rect>
              </svg>
              <span>Now Playing</span>
            </div>
          )}
          <div className="playlist-card__image">
            <img
              src={playlist.coverImage}
              alt={`${playlist.title} cover`}
              loading="lazy"
            />
          </div>
          <div className="playlist-card__info">
            <h3 className="playlist-card__title">{playlist.title}</h3>
            <p className="playlist-card__description">{playlist.description}</p>
            <span className="playlist-card__meta">
              {playlist.tracks.length} tracks &middot; {playlist.genre}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default PlaylistGrid
