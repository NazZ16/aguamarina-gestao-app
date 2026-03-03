import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminSettings = () => (
  <div className="space-y-8">
    <h1 className="text-2xl font-black">Configurações</h1>

    {/* Escola */}
    <section className="rounded-lg bg-card p-6 shadow-card space-y-4">
      <h2 className="text-lg font-bold">Escola</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Nome da escola</Label>
          <Input defaultValue="Escola de Natação Holmes Place" />
        </div>
        <div className="space-y-2">
          <Label>Morada</Label>
          <Input defaultValue="Av. da Liberdade 180, Lisboa" />
        </div>
      </div>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">Guardar</Button>
    </section>

    {/* Épocas */}
    <section className="rounded-lg bg-card p-6 shadow-card space-y-4">
      <h2 className="text-lg font-bold">Épocas / Períodos</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Início da época</Label>
          <Input type="date" defaultValue="2025-09-15" />
        </div>
        <div className="space-y-2">
          <Label>Fim da época</Label>
          <Input type="date" defaultValue="2026-07-15" />
        </div>
      </div>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">Guardar</Button>
    </section>

    {/* Níveis */}
    <section className="rounded-lg bg-card p-6 shadow-card space-y-4">
      <h2 className="text-lg font-bold">Níveis</h2>
      <div className="flex flex-wrap gap-2">
        {["Iniciação", "Básico", "Intermédio", "Avançado"].map((l) => (
          <span key={l} className="rounded-full bg-gold-light px-4 py-1.5 text-sm font-semibold text-primary">{l}</span>
        ))}
      </div>
      <Button variant="outline" size="sm">+ Adicionar nível</Button>
    </section>

    {/* Salas */}
    <section className="rounded-lg bg-card p-6 shadow-card space-y-4">
      <h2 className="text-lg font-bold">Salas / Pistas</h2>
      <div className="flex flex-wrap gap-2">
        {["Piscina 1 (25m)", "Piscina 2 (15m)", "Piscina Bebés"].map((s) => (
          <span key={s} className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium">{s}</span>
        ))}
      </div>
      <Button variant="outline" size="sm">+ Adicionar sala</Button>
    </section>
  </div>
);

export default AdminSettings;
