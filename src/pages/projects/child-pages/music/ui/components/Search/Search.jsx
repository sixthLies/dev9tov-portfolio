import React from 'react'
import './Search.scss'

/**
 * Search - Search input for filtering tracks by title and genre
 */
function Search({ value, onChange, onClear }) {
  return (
    <div className="search" role="search" aria-label="Search tracks">
      <div className="search__input-wrapper">
        <svg className="search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="search__input"
          placeholder="Search by track title or genre..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search by track title or genre"
        />
        {value && (
          <button
            className="search__clear"
            onClick={onClear}
            aria-label="Clear search"
            type="button"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  )
}

export default Search

