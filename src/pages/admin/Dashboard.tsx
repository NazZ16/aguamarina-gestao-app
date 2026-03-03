import { Link } from "react-router-dom";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import { classes, sessions, alerts } from "@/data/mockData";
import { Users, UserPlus, TrendingUp, DoorOpen, AlertTriangle, Clock, CreditCard, UserX } from "lucide-react";
import { Button } from "@/components/ui/button";

const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const today = new Date();
const dateStr = `${dayNames[today.getDay()]}, ${today.getDate()} de ${monthNames[today.getMonth()]} de ${today.getFullYear()}`;

const dayMap: Record<string, number> = { Seg: 1, Ter: 2, Qua: 3, Qui: 4, Sex: 5, "Sáb": 6, Dom: 0 };
const todayDayIndex = today.getDay();
const todayClasses = classes.filter((c) => c.days.some((d) => dayMap[d] === todayDayIndex));

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const hours = Array.from({ length: 11 }, (_, i) => `${String(8 + i).padStart(2, "0")}:00`);

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black">Dashboard & Aulas</h1>
        <p className="text-sm text-muted-foreground">{dateStr}</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        <StatCard title="Turmas Ativas" value={9} icon={Users} />
        <StatCard title="Inscrições hoje" value={0} icon={UserPlus} />
        <StatCard title="Assiduidade" value="73%" icon={TrendingUp} subtitle="média global" />
        <StatCard title="Vagas disponíveis" value={194} icon={DoorOpen} />
        <StatCard title="Alertas" value="3/7" icon={AlertTriangle} subtitle="pendentes/total" />
      </div>

      {/* Today's classes banner */}
      <div className="rounded-lg bg-gold-light p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-bold text-primary">Minhas aulas hoje ({todayClasses.length})</h2>
          <Link to="/admin/classes" className="text-sm font-semibold text-primary hover:underline">
            Ver todas as minhas turmas →
          </Link>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {todayClasses.length === 0 && <p className="text-sm text-muted-foreground">Nenhuma aula hoje.</p>}
          {todayClasses.map((c) => (
            <div key={c.id} className="rounded-lg bg-card px-4 py-2 shadow-sm">
              <p className="text-sm font-bold">{c.startTime} – {c.endTime}</p>
              <p className="text-xs text-muted-foreground">{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Weekly calendar */}
        <div className="overflow-auto rounded-lg bg-card shadow-card">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[60px_repeat(5,1fr)] border-b">
              <div className="p-2" />
              {weekDays.map((d) => (
                <div key={d} className="border-l p-2 text-center text-xs font-bold uppercase text-muted-foreground">
                  {d}
                </div>
              ))}
            </div>
            <div className="relative">
              {hours.map((h) => (
                <div key={h} className="grid grid-cols-[60px_repeat(5,1fr)] border-b last:border-b-0" style={{ height: 48 }}>
                  <div className="flex items-start justify-end pr-2 pt-1 text-[10px] text-muted-foreground">{h}</div>
                  {weekDays.map((d) => {
                    const cls = classes.find((c) => c.startTime === h && c.days.includes(d));
                    return (
                      <div key={d} className="relative border-l">
                        {cls && (
                          <div
                            className="absolute inset-x-1 top-0.5 rounded-md px-2 py-1 text-[10px] font-semibold leading-tight"
                            style={{ backgroundColor: cls.color + "22", color: cls.color, borderLeft: `3px solid ${cls.color}` }}
                          >
                            <span className="block truncate">{cls.name}</span>
                            <span className="block text-[9px] opacity-70">{cls.teacher.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="rounded-lg bg-card p-5 shadow-card">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">Alertas pendentes</h3>
          <ul className="space-y-3">
            {alerts.map((a) => (
              <li key={a.id} className="flex items-start gap-3 rounded-lg bg-secondary p-3">
                <AlertTriangle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${a.type === "danger" ? "text-destructive" : a.type === "warning" ? "text-warning" : "text-primary"}`} />
                <div className="flex-1">
                  <p className="text-sm">{a.message}</p>
                  <Button variant="link" size="sm" className="mt-1 h-auto p-0 text-xs text-primary">Resolver</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Monthly summary */}
      <div>
        <h2 className="mb-3 text-lg font-bold">Resumo do mês</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard title="Receita (Março)" value="€4.850" icon={CreditCard} trend="+12% vs fev" />
          <StatCard title="Pagamentos pendentes" value={5} icon={Clock} subtitle="€650 em atraso" />
          <StatCard title="Faltas registadas" value={23} icon={UserX} subtitle="este mês" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
