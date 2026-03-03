import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
  const { dark, toggle } = useTheme();
  const { userName, role } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-card px-4 shadow-card">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <span className="text-lg font-bold tracking-tight">Escola de Natação</span>
        <span className="hidden text-muted-foreground sm:inline">•</span>
        <span className="hidden text-sm text-muted-foreground sm:inline">Gestão</span>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
          {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold leading-none">{userName}</p>
          <p className="text-xs text-muted-foreground capitalize">{role === "admin" ? "Administrador" : "Professor"}</p>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
