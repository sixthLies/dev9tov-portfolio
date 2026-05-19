export const EXPERIENCE_IMPACT = {
  kiberpride: {
    metrics: [
      "Быстрая диагностика",
      "Предсказуемая среда",
      "Чёткая ежедневная отчётность",
    ],
    outcomes: ["Windows 11", "1C и АТОЛ", "Excel"],
  },
  colezium: {
    metrics: [
      "Удаленная поддержка",
      "Обработка инцидентов",
      "Восстановление работы",
    ],
    outcomes: ["Windows 10", "AnyDesk", "Telegram"],
  },
  kiberpridesupportremote: {
    metrics: [
      "Удаленная поддержка",
      "Быстрая диагностика",
      "Восстановление работы",
    ],
    outcomes: ["Windows 10/11", "AnyDesk", "Jira"],
  },
}

const EXPERIENCE_IMPACT_ALIASES = {
  "colezium-automation": "colezium",
  "colezium-frontend": "colezium",
  "colezium-support": "colezium",
  "kiberpride-automation": "kiberpride",
  "kiberpride-frontend": "kiberpride",
  "kiberpride-support": "kiberpride",
  "kiberpride-support-remote": "kiberpride",
}

const DEFAULT_EXPERIENCE_IMPACT = {
  metrics: ["System thinking", "Support quality", "Reliable delivery"],
  outcomes: ["Root-cause focus", "Stable process", "Readable decisions"],
}

export const getExperienceImpact = (id) => {
  const impactKey = EXPERIENCE_IMPACT[id] ? id : EXPERIENCE_IMPACT_ALIASES[id]

  return EXPERIENCE_IMPACT[impactKey] || DEFAULT_EXPERIENCE_IMPACT
}
