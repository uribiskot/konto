import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SettingsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Configuracio</h1>
      <p className="text-sm text-muted-foreground">
        Zona placeholder per preferencies generals de Konto.
      </p>

      <article className="max-w-md space-y-3 rounded-none border bg-card p-4">
        <div className="space-y-1.5">
          <Label htmlFor="currency">Moneda per defecte</Label>
          <Input id="currency" defaultValue="EUR" />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="language">Idioma</Label>
          <Input id="language" defaultValue="ca-ES" />
        </div>
      </article>
    </section>
  )
}
