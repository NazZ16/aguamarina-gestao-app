import { Button } from "@/components/ui/button";

const payments = [
  { aluno: "Beatriz Silva", turma: "Iniciação A", valor: "€65", data: "2026-03-01", estado: "Pago" },
  { aluno: "Miguel Rodrigues", turma: "Iniciação A", valor: "€65", data: "2026-03-01", estado: "Pago" },
  { aluno: "Sofia Mendes", turma: "Iniciação B", valor: "€65", data: "2026-03-01", estado: "Pendente" },
  { aluno: "Tomás Pereira", turma: "Básico A", valor: "€75", data: "2026-02-28", estado: "Pago" },
  { aluno: "Leonor Almeida", turma: "Intermédio A + Avançados A", valor: "€120", data: "2026-03-01", estado: "Pendente" },
  { aluno: "Francisco Sousa", turma: "Avançados B", valor: "€85", data: "2026-02-15", estado: "Atrasado" },
];

const attendanceSummary = [
  { turma: "Iniciação A", sessoes: 12, media: "87%" },
  { turma: "Iniciação B", sessoes: 10, media: "78%" },
  { turma: "Básico A", sessoes: 12, media: "82%" },
  { turma: "Básico B", sessoes: 11, media: "75%" },
  { turma: "Intermédio A", sessoes: 12, media: "91%" },
  { turma: "Intermédio B", sessoes: 10, media: "68%" },
  { turma: "Avançados A", sessoes: 12, media: "83%" },
  { turma: "Avançados B", sessoes: 11, media: "76%" },
];

const AdminReports = () => (
  <div className="space-y-8">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-2xl font-black">Relatórios</h1>
      <Button variant="outline">Exportar CSV</Button>
    </div>

    {/* Financeiro */}
    <section className="space-y-3">
      <h2 className="text-lg font-bold">Financeiro — Março 2026</h2>
      <div className="overflow-auto rounded-lg bg-card shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b bg-panel-2 text-left"><th className="px-4 py-3 font-semibold">Aluno</th><th className="px-4 py-3 font-semibold">Turma</th><th className="px-4 py-3 font-semibold">Valor</th><th className="px-4 py-3 font-semibold">Data</th><th className="px-4 py-3 font-semibold">Estado</th></tr></thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-b last:border-b-0 hover:bg-secondary/50">
                <td className="px-4 py-3">{p.aluno}</td>
                <td className="px-4 py-3">{p.turma}</td>
                <td className="px-4 py-3 font-semibold">{p.valor}</td>
                <td className="px-4 py-3">{p.data}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${p.estado === "Pago" ? "bg-success/15 text-success" : p.estado === "Pendente" ? "bg-warning/15 text-warning" : "bg-destructive/15 text-destructive"}`}>
                    {p.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Assiduidade */}
    <section className="space-y-3">
      <h2 className="text-lg font-bold">Assiduidade por turma</h2>
      <div className="overflow-auto rounded-lg bg-card shadow-card">
        <table className="w-full text-sm">
          <thead><tr className="border-b bg-panel-2 text-left"><th className="px-4 py-3 font-semibold">Turma</th><th className="px-4 py-3 font-semibold">Sessões</th><th className="px-4 py-3 font-semibold">Média assiduidade</th></tr></thead>
          <tbody>
            {attendanceSummary.map((a, i) => (
              <tr key={i} className="border-b last:border-b-0 hover:bg-secondary/50">
                <td className="px-4 py-3 font-medium">{a.turma}</td>
                <td className="px-4 py-3">{a.sessoes}</td>
                <td className="px-4 py-3 font-semibold">{a.media}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default AdminReports;
