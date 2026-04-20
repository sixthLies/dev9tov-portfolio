import test from "node:test"
import assert from "node:assert/strict"
import {
  extractEmailAddress,
  formatSocialLabel,
  normalizeSocialHref,
} from "../../src/shared/ui/modals/modalWindowCard/utils.js"

test("extractEmailAddress supports raw emails and mailto links", () => {
  assert.equal(extractEmailAddress("prodbyxantha@gmail.com"), "prodbyxantha@gmail.com")
  assert.equal(
    extractEmailAddress("mailto:hystep_2@mail.ru"),
    "hystep_2@mail.ru",
  )
  assert.equal(extractEmailAddress("https://t.me/aveaveavenjoyer"), null)
})

test("normalizeSocialHref converts plain emails into mailto links", () => {
  assert.equal(
    normalizeSocialHref("prodbyxantha@gmail.com"),
    "mailto:prodbyxantha@gmail.com",
  )
  assert.equal(
    normalizeSocialHref("mailto:hystep_2@mail.ru"),
    "mailto:hystep_2@mail.ru",
  )
  assert.equal(
    normalizeSocialHref("https://github.com/sixthLies"),
    "https://github.com/sixthLies",
  )
})

test("formatSocialLabel keeps visible labels human-readable", () => {
  assert.equal(
    formatSocialLabel("mailto:prodbyxantha@gmail.com", 64),
    "prodbyxantha@gmail.com",
  )
  assert.equal(
    formatSocialLabel("https://github.com/sixthLies", 64),
    "https://github.com/sixthLies",
  )
})
