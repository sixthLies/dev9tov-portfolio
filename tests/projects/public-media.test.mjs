import test from "node:test"
import assert from "node:assert/strict"
import {
  createPublicMediaUrl,
  normalizePublicBaseUrl,
} from "../../src/pages/projects/lib/publicMedia.js"

test("normalizePublicBaseUrl preserves root and basename formats", () => {
  assert.equal(normalizePublicBaseUrl("/"), "/")
  assert.equal(normalizePublicBaseUrl("/dev9tov-portfolio/"), "/dev9tov-portfolio/")
  assert.equal(normalizePublicBaseUrl("dev9tov-portfolio"), "/dev9tov-portfolio/")
})

test("createPublicMediaUrl joins public media paths with basename", () => {
  assert.equal(
    createPublicMediaUrl(
      "project-media/eCommerce-shows/video/n8n workflow mp4.mp4",
      "/dev9tov-portfolio/",
    ),
    "/dev9tov-portfolio/project-media/eCommerce-shows/video/n8n%20workflow%20mp4.mp4",
  )
})

test("createPublicMediaUrl encodes unicode file names safely", () => {
  assert.equal(
    createPublicMediaUrl(
      "project-media/eCommerce-shows/video/Модель mp4.mp4",
      "/dev9tov-portfolio/",
    ),
    "/dev9tov-portfolio/project-media/eCommerce-shows/video/%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C%20mp4.mp4",
  )
})
