import React from 'react'
import './RepeatControls.scss'

/**
 * RepeatControls - Toggle between Off, Repeat All, and Repeat One
 * Uses secondary accent color (#f72585) when active
 */
function RepeatControls({ mode = 'off', onToggle }) {
  const isActive = mode !== 'off'
  const isRepeatOne = mode === 'repeat-one'

  return (
    <button
      className={`repeat-controls ${isActive ? 'repeat-controls--active' : ''} ${isRepeatOne ? 'repeat-controls--one' : ''}`}
      onClick={onToggle}
      aria-label={`Repeat mode: ${mode}`}
      aria-pressed={isActive}
      type="button"
      title={mode === 'off' ? 'Repeat off' : mode === 'repeat-all' ? 'Repeat all' : 'Repeat one'}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
      {isRepeatOne && <span className="repeat-controls__one-badge">1</span>}
    </button>
  )
}

export default RepeatControls

