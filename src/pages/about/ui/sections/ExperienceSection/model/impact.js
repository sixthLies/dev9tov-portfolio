export const EXPERIENCE_IMPACT = {
  kiberpride: {
    metrics: ["Ops stability", "Live incidents", "Inventory control"],
    outcomes: [
      "Faster diagnostics",
      "Predictable environment",
      "Clear daily reporting",
    ],
  },
  colezium: {
    metrics: ["Remote support", "Ticket flow", "User recovery"],
    outcomes: [
      "Resolved client issues",
      "Cleaner escalation",
      "Actionable reports",
    ],
  },
}

export const getExperienceImpact = (id) => {
  return (
    EXPERIENCE_IMPACT[id === "colezium-support"] || {
      metrics: ["System thinking", "Support quality", "Reliable delivery"],
      outcomes: ["Root-cause focus", "Stable process", "Readable decisions"],
    }
  )
}
