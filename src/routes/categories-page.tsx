import type { KontoSession } from "@/types/session"

type CategoriesPageProps = {
  session: KontoSession | null
}

export function CategoriesPage({ session }: CategoriesPageProps) {
  const categories = session?.categories ?? []

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Les meves categories</h1>
      <p className="text-sm text-muted-foreground">
        Placeholder de categories. Despres hi podrem afegir CRUD complet.
      </p>

      <ul className="grid gap-2 sm:grid-cols-2">
        {categories.map((category) => (
          <li key={category} className="rounded-none border bg-card px-3 py-2 text-sm">
            {category}
          </li>
        ))}
      </ul>
    </section>
  )
}
