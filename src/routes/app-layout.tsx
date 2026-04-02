import {
  HugeiconsIcon,
} from "@hugeicons/react"
import {
  Logout03Icon,
  Settings02Icon,
  StickyNote01Icon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

type AppLayoutProps = {
  hasSession: boolean
  onLogout: () => void
}

const links = [
  { to: "/app", label: "Main", icon: Wallet01Icon },
  { to: "/app/settings", label: "Configuracio", icon: Settings02Icon },
  { to: "/app/categories", label: "Les meves categories", icon: StickyNote01Icon },
]

export function AppLayout({ hasSession, onLogout }: AppLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()

  if (!hasSession) {
    return <Navigate to="/" replace />
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Konto</SidebarGroupLabel>
            <SidebarMenu>
              {links.map((link) => {
                const isActive =
                  link.to === "/app"
                    ? location.pathname === "/app"
                    : location.pathname.startsWith(link.to)

                return (
                  <SidebarMenuItem key={link.to}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <NavLink to={link.to}>
                        <HugeiconsIcon icon={link.icon} strokeWidth={2} />
                        <span>{link.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              onLogout()
              navigate("/")
            }}
          >
            <HugeiconsIcon icon={Logout03Icon} strokeWidth={2} />
            Sortir
          </Button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="border-b p-3">
          <SidebarTrigger />
        </header>
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
