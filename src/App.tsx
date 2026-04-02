import { useEffect, useState } from "react"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom"

import { AppLayout } from "@/routes/app-layout"
import { CategoriesPage } from "@/routes/categories-page"
import { LandingPage } from "@/routes/landing-page"
import { MainPage } from "@/routes/main-page"
import { SettingsPage } from "@/routes/settings-page"
import {
  createNewSession,
  loadSessionFromJsonFile,
  SESSION_STORAGE_KEY,
} from "@/lib/session"
import type { KontoSession } from "@/types/session"

function App() {
  const [session, setSession] = useState<KontoSession | null>(() => {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY)
    if (!raw) return null

    try {
      return JSON.parse(raw) as KontoSession
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (session) {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session))
      return
    }

    localStorage.removeItem(SESSION_STORAGE_KEY)
  }, [session])

  const handleCreateSession = () => {
    setSession(createNewSession())
  }

  const handleLoadSession = async (file: File) => {
    const loaded = await loadSessionFromJsonFile(file)
    setSession(loaded)
  }

  const handleLogout = () => {
    setSession(null)
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              hasPreviousSession={Boolean(session)}
              onCreateSession={handleCreateSession}
              onLoadSession={handleLoadSession}
            />
          }
        />

        <Route
          path="/app"
          element={<AppLayout hasSession={Boolean(session)} onLogout={handleLogout} />}
        >
          <Route index element={<MainPage session={session} />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="categories" element={<CategoriesPage session={session} />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
