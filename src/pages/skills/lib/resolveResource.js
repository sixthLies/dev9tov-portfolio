import { resources } from "../model/pageConfig"

export const resolveResource = (key) => resources[key] ?? null
