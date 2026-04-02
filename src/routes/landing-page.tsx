import { useRef, useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type LandingPageProps = {
  hasPreviousSession: boolean
  onCreateSession: () => void
  onLoadSession: (file: File) => Promise<void>
}

export function LandingPage({
  hasPreviousSession,
  onCreateSession,
  onLoadSession,
}: LandingPageProps) {
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleCreate = () => {
    onCreateSession()
    navigate("/app")
  }

  const handleContinue = () => {
    navigate("/app")
  }

  const openFilePicker = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      setError(null)
      await onLoadSession(file)
      navigate("/app")
    } catch (caught) {
      const message =
        caught instanceof Error ? caught.message : "No s'ha pogut carregar la sessio."
      setError(message)
    } finally {
      event.target.value = ""
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-none border bg-card p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Benvingut a Konto</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Pots iniciar una sessio nova o carregar una sessio previa des d&apos;un fitxer JSON.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={handleCreate}>Nova sessio</Button>
          <Button variant="outline" onClick={openFilePicker}>
            Carregar JSON
          </Button>
          {hasPreviousSession ? (
            <Button variant="secondary" onClick={handleContinue}>
              Continuar sessio local
            </Button>
          ) : null}
        </div>

        <Input
          ref={fileInputRef}
          className="sr-only"
          type="file"
          accept="application/json"
          onChange={handleFileSelect}
        />

        {error ? <p className="mt-4 text-xs text-destructive">{error}</p> : null}

        <img
          src={`${import.meta.env.BASE_URL}house.svg`}
          alt="Simple house"
          className="mt-8 w-36"
        />
      </section>
    </main>
  )
}
