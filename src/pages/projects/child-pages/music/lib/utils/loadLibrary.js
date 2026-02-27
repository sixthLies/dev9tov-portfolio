import { MUSIC_FALLBACK_COVER, MUSIC_LIBRARY_URL } from "../../model/constants"

const resolveCover = (coverPath) => {
  if (!coverPath || coverPath.startsWith("/images/")) {
    return MUSIC_FALLBACK_COVER
  }

  return coverPath
}

/**
 * Fetches and parses the music library.
 * @returns {Promise<{playlists: Array}>} The parsed library data
 * @throws {Error} If the fetch fails or JSON is invalid
 */
export async function loadLibrary() {
  let response

  try {
    response = await fetch(MUSIC_LIBRARY_URL)
  } catch (networkError) {
    // Network errors (offline, DNS failure, server unreachable, etc.)
    throw new Error(
      "Unable to load music library. Please check your connection and try again.",
    )
  }

  if (!response.ok) {
    throw new Error(
      "Unable to load music library. The music library file could not be found.",
    )
  }

  // Check content-type to catch cases where server returns HTML fallback instead of JSON
  const contentType = response.headers.get("content-type") || ""
  if (!contentType.includes("application/json")) {
    throw new Error(
      "Unable to load music library. The music library file could not be found.",
    )
  }

  let data
  try {
    data = await response.json()
  } catch (parseError) {
    throw new Error(
      "Unable to load music library. The library data appears to be corrupted.",
    )
  }

  if (!data || !Array.isArray(data.playlists)) {
    throw new Error(
      "Unable to load music library. The library data format is not recognized.",
    )
  }

  return {
    ...data,
    playlists: data.playlists.map((playlist) => ({
      ...playlist,
      coverImage: resolveCover(playlist.coverImage),
      tracks: Array.isArray(playlist.tracks) ? playlist.tracks : [],
    })),
  }
}
