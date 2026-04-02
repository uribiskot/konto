import type { KontoSession } from "@/types/session"

type MainPageProps = {
  session: KontoSession | null
}

export function MainPage({ session }: MainPageProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Main</h1>
      <p className="text-sm text-muted-foreground">
        Aquesta es la pagina principal del core de l&apos;aplicacio.
      </p>

      <article className="rounded-none border bg-card p-4">
        <h2 className="text-sm font-semibold">Sessio activa</h2>
        <pre className="mt-3 overflow-auto bg-muted p-3 text-xs">
          {JSON.stringify(session, null, 2)}
        </pre>
      </article>
    </section>
  )
}
