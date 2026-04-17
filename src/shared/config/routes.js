const normalizePath = (value) => value.replace(/^\/+|\/+$/g, "")

const createRoutePath = (segment = "") => {
  const normalizedSegment = normalizePath(segment)
  return normalizedSegment ? `/${normalizedSegment}` : "/"
}

const createRouteRecord = ({
  id,
  segment = "",
  index = false,
  label,
  includeInMenu = false,
}) =>
  Object.freeze({
    id,
    index,
    segment: index ? "" : segment,
    path: index ? "/" : segment === "*" ? "*" : createRoutePath(segment),
    label,
    includeInMenu,
  })

export const PAGE_ROUTE_RECORDS = Object.freeze([
  createRouteRecord({ id: "home", index: true }),
  createRouteRecord({
    id: "about",
    segment: "about",
    label: "Обо мне",
    includeInMenu: true,
  }),
  createRouteRecord({
    id: "skills",
    segment: "skills",
    label: "Мой стек",
    includeInMenu: true,
  }),
  createRouteRecord({
    id: "projects",
    segment: "projects",
    label: "Мое портфолио",
    includeInMenu: true,
  }),
  createRouteRecord({
    id: "contacts",
    segment: "contacts",
    label: "Мои контакты",
    includeInMenu: true,
  }),
  createRouteRecord({ id: "notFound", segment: "*" }),
])

export const ROUTE_PATHS = Object.freeze({
  root: "/",
  home: "/",
  about: createRoutePath("about"),
  skills: createRoutePath("skills"),
  projects: createRoutePath("projects"),
  contacts: createRoutePath("contacts"),
  notFound: "*",
})

export const MENU_ITEMS = Object.freeze(
  PAGE_ROUTE_RECORDS.filter((route) => route.includeInMenu).map(
    ({ id, path, label }) =>
      Object.freeze({
        id,
        href: path,
        label,
      }),
  ),
)

export const normalizeRouterBasename = (baseUrl = "/") => {
  const normalized = normalizePath(baseUrl)
  return normalized ? `/${normalized}` : "/"
}

export const getRouterBasename = (baseUrl = "/") => {
  const normalized = normalizeRouterBasename(baseUrl)
  return normalized === "/" ? undefined : normalized
}

