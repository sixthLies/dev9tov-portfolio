import React from "react"
import { Reveal } from "@/shared/ui"
import { formatTime } from "../../../lib/utils/formatTime"
import "./SearchResults.scss"

/**
 * SearchResults - Displays tracks that match the search query
 * Shows results grouped by playlist they belong to
 */
function SearchResults({ results, searchQuery, onResultClick }) {
  if (!results || results.length === 0) {
    return (
      <Reveal
        as="div"
        className="search-results search-results--empty"
        preset="text"
        role="region"
        aria-label="Search results"
      >
        <div className="search-results__empty">
          <svg
            className="search-results__empty-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p className="search-results__empty-text">
            No tracks found for "{searchQuery}"
          </p>
          <p className="search-results__empty-hint">
            Try searching with a different term
          </p>
        </div>
      </Reveal>
    )
  }

  return (
    <div className="search-results" role="region" aria-label="Search results">
      <Reveal as="p" className="search-results__count" preset="text">
        {results.length} {results.length === 1 ? "track" : "tracks"} found for "{searchQuery}"
      </Reveal>
      <div className="search-results__list" role="list">
        {results.map((result, index) => (
          <Reveal
            as="div"
            key={`${result.playlistId}-${result.track.id}`}
            className="search-results__item"
            preset="inline"
            index={index}
            role="listitem"
            tabIndex={0}
            onClick={() => onResultClick?.(result)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onResultClick?.(result)
              }
            }}
          >
            <div className="search-results__track-info">
              <span className="search-results__track-title">
                {result.track.title}
              </span>
              <span className="search-results__track-meta">
                {result.track.producer} &middot; {result.track.genre}
              </span>
            </div>
            <div className="search-results__track-details">
              <span className="search-results__playlist-name">
                {result.playlistTitle}
              </span>
              <span className="search-results__track-duration">
                {formatTime(result.track.duration)}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
