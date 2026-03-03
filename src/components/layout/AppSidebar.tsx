import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, LayoutDashboard, Users, ClipboardList, CalendarDays, Map, GraduationCap, UserCog, BarChart3, Settings, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const adminLinks = [
  { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/classes", icon: Users, label: "Turmas" },
  { to: "/admin/availability", icon: ClipboardList, label: "Vagas" },
  { to: "/admin/sessions", icon: CalendarDays, label: "Sessões" },
  { to: "/admin/class-map", icon: Map, label: "Mapa de Aulas" },
  { to: "/admin/students", icon: GraduationCap, label: "Alunos" },
  { to: "/admin/teachers", icon: UserCog, label: "Professores" },
  { to: "/admin/reports", icon: BarChart3, label: "Relatórios" },
  { to: "/admin/settings", icon: Settings, label: "Configurações" },
];

const teacherLinks = [
  { to: "/teacher", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/teacher/classes", icon: Users, label: "Minhas Turmas" },
  { to: "/teacher/class-map", icon: Map, label: "Mapa de Aulas" },
  { to: "/teacher/substitutions", icon: RefreshCw, label: "Substituições" },
];

const AppSidebar = ({ open, onClose }: SidebarProps) => {
  const { role, logout, switchRole } = useAuth();
  const location = useLocation();
  const links = role === "admin" ? adminLinks : teacherLinks;

  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col border-r bg-card transition-transform duration-300 lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <span className="text-xl font-black text-primary">🏊 Natação</span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {links.map((link) => {
              const isActive = location.pathname === link.to || (link.to !== "/admin" && link.to !== "/teacher" && location.pathname.startsWith(link.to));
              const isExactActive = location.pathname === link.to;
              const active = link.to === "/admin" || link.to === "/teacher" ? isExactActive : isActive;

              return (
                <li key={link.to}>
                  <RouterNavLink
                    to={link.to}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "border-l-[3px] border-primary bg-gold-light text-primary"
                        : "border-l-[3px] border-transparent hover:bg-secondary"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </RouterNavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Role switcher (demo only) */}
        <div className="border-t px-4 py-2">
          <button
            onClick={() => switchRole(role === "admin" ? "teacher" : "admin")}
            className="w-full rounded-lg bg-secondary px-3 py-2 text-xs text-muted-foreground hover:bg-panel-2 transition-colors"
          >
            Mudar para {role === "admin" ? "Professor" : "Admin"}
          </button>
        </div>

        <div className="border-t p-4">
          <button
            onClick={logout}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive hover:bg-secondary transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
