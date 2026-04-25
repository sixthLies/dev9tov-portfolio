import { useParams } from "react-router"
import { buildVersionedPath } from "@/shared/config/routes"
import { getSiteVersionContent } from "@/shared/config/siteVersions"

export const useSiteVersion = () => {
  const { versionId } = useParams()

  return {
    versionId,
    content: getSiteVersionContent(versionId),
  }
}

export const useSiteVersionContent = () => useSiteVersion().content

export const useVersionedPath = () => {
  const { versionId } = useParams()
  return (path) => buildVersionedPath(path, versionId)
}
