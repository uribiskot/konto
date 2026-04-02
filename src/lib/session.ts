import type { KontoSession } from "@/types/session"

export const SESSION_STORAGE_KEY = "konto.session"

export function createNewSession(): KontoSession {
  return {
    id: crypto.randomUUID(),
    name: "Sessio nova",
    createdAt: new Date().toISOString(),
    categories: ["Llar", "Menjar", "Transport"],
  }
}

function isKontoSession(value: unknown): value is KontoSession {
  if (!value || typeof value !== "object") return false

  const session = value as Partial<KontoSession>

  return (
    typeof session.id === "string" &&
    typeof session.name === "string" &&
    typeof session.createdAt === "string" &&
    Array.isArray(session.categories) &&
    session.categories.every((category) => typeof category === "string")
  )
}

export async function loadSessionFromJsonFile(file: File): Promise<KontoSession> {
  const content = await file.text()
  const parsed: unknown = JSON.parse(content)

  if (!isKontoSession(parsed)) {
    throw new Error("El fitxer no te format de sessio valid.")
  }

  return parsed
}
