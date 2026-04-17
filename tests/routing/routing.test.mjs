import test from "node:test"
import assert from "node:assert/strict"
import { createMemoryRouter, matchRoutes } from "react-router"
import {
  getRouterBasename,
  MENU_ITEMS,
  PAGE_ROUTE_RECORDS,
  ROUTE_PATHS,
} from "../../src/shared/config/routes.js"

const TEST_BASE_URL = "/dev9tov-portfolio/"
const TEST_BASENAME = getRouterBasename(TEST_BASE_URL)

const createRouteTree = () => [
  {
    id: "layout",
    path: ROUTE_PATHS.root,
    children: PAGE_ROUTE_RECORDS.map((route) => {
      if (route.index) {
        return {
          id: route.id,
          index: true,
          element: null,
        }
      }

      return {
        id: route.id,
        path: route.segment,
        element: null,
      }
    }),
  },
]

const getMatchedRouteIds = (path, basename = TEST_BASENAME) => {
  const matches = matchRoutes(createRouteTree(), path, basename)
  return matches?.map((entry) => entry.route.id) ?? null
}

test("route map contains the expected public pages and wildcard fallback", () => {
  const routeIds = PAGE_ROUTE_RECORDS.map((route) => route.id)

  assert.deepEqual(routeIds, [
    "home",
    "about",
    "skills",
    "projects",
    "contacts",
    "notFound",
  ])
})

test("direct URLs resolve correctly under the GitHub Pages basename", () => {
  assert.deepEqual(getMatchedRouteIds("/dev9tov-portfolio/"), [
    "layout",
    "home",
  ])
  assert.deepEqual(getMatchedRouteIds("/dev9tov-portfolio/about"), [
    "layout",
    "about",
  ])
  assert.deepEqual(getMatchedRouteIds("/dev9tov-portfolio/skills"), [
    "layout",
    "skills",
  ])
  assert.deepEqual(getMatchedRouteIds("/dev9tov-portfolio/projects"), [
    "layout",
    "projects",
  ])
  assert.deepEqual(getMatchedRouteIds("/dev9tov-portfolio/contacts"), [
    "layout",
    "contacts",
  ])
})

test("unknown paths fall back to the wildcard route instead of crashing", () => {
  assert.deepEqual(getMatchedRouteIds("/dev9tov-portfolio/missing-route"), [
    "layout",
    "notFound",
  ])
})

test("programmatic navigation preserves basename and supports back/forward history", async () => {
  const router = createMemoryRouter(createRouteTree(), {
    basename: TEST_BASENAME,
    initialEntries: ["/dev9tov-portfolio/"],
  })

  assert.equal(router.state.location.pathname, "/dev9tov-portfolio/")
  assert.deepEqual(
    router.state.matches.map((match) => match.route.id),
    ["layout", "home"],
  )

  await router.navigate(ROUTE_PATHS.projects)
  assert.equal(router.state.location.pathname, "/dev9tov-portfolio/projects")
  assert.deepEqual(
    router.state.matches.map((match) => match.route.id),
    ["layout", "projects"],
  )

  await router.navigate(ROUTE_PATHS.contacts)
  assert.equal(router.state.location.pathname, "/dev9tov-portfolio/contacts")
  assert.deepEqual(
    router.state.matches.map((match) => match.route.id),
    ["layout", "contacts"],
  )

  await router.navigate(-1)
  assert.equal(router.state.location.pathname, "/dev9tov-portfolio/projects")
  assert.deepEqual(
    router.state.matches.map((match) => match.route.id),
    ["layout", "projects"],
  )

  await router.navigate(1)
  assert.equal(router.state.location.pathname, "/dev9tov-portfolio/contacts")
  assert.deepEqual(
    router.state.matches.map((match) => match.route.id),
    ["layout", "contacts"],
  )
})

test("navigation menu only references registered routes", () => {
  const allowedPaths = new Set(
    PAGE_ROUTE_RECORDS.filter((route) => route.includeInMenu).map(
      (route) => route.path,
    ),
  )

  assert.ok(MENU_ITEMS.length > 0)
  MENU_ITEMS.forEach((item) => {
    assert.ok(allowedPaths.has(item.href), `Unknown menu route: ${item.href}`)
  })
})

test("current route config has no dynamic segments yet", () => {
  const dynamicRoutes = PAGE_ROUTE_RECORDS.filter(
    (route) => !route.index && route.segment.includes(":"),
  )

  assert.equal(dynamicRoutes.length, 0)
})
