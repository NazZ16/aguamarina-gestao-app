export interface ClassData {
  id: string;
  name: string;
  teacher: string;
  teacherId: string;
  schedule: string;
  level: string;
  enrolled: number;
  capacity: number;
  room: string;
  days: string[];
  startTime: string;
  endTime: string;
  color: string;
}

export interface StudentData {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  enrolledSince: string;
  classes: string[];
  attendance: number;
}

export interface TeacherData {
  id: string;
  name: string;
  email: string;
  classes: string[];
  availability: string;
  initials: string;
}

export interface SessionData {
  id: string;
  date: string;
  classId: string;
  className: string;
  teacher: string;
  attendees: number;
  total: number;
  status: "Realizada" | "Pendente" | "Cancelada";
}

export interface SubstitutionData {
  id: string;
  date: string;
  className: string;
  reason: string;
  status: "Pendente" | "Aprovada" | "Recusada";
}

export interface AlertData {
  id: string;
  message: string;
  type: "warning" | "danger" | "info";
}

export const classes: ClassData[] = [
  { id: "1", name: "Iniciação A", teacher: "Maria Santos", teacherId: "t1", schedule: "Seg/Qua 10:00", level: "Iniciação", enrolled: 8, capacity: 10, room: "Piscina 1", days: ["Seg", "Qua"], startTime: "10:00", endTime: "11:00", color: "#3B82F6" },
  { id: "2", name: "Iniciação B", teacher: "Maria Santos", teacherId: "t1", schedule: "Ter/Qui 10:00", level: "Iniciação", enrolled: 6, capacity: 10, room: "Piscina 1", days: ["Ter", "Qui"], startTime: "10:00", endTime: "11:00", color: "#6366F1" },
  { id: "3", name: "Básico A", teacher: "João Costa", teacherId: "t2", schedule: "Seg/Qua 11:00", level: "Básico", enrolled: 10, capacity: 12, room: "Piscina 2", days: ["Seg", "Qua"], startTime: "11:00", endTime: "12:00", color: "#10B981" },
  { id: "4", name: "Básico B", teacher: "João Costa", teacherId: "t2", schedule: "Ter/Qui 14:00", level: "Básico", enrolled: 9, capacity: 12, room: "Piscina 2", days: ["Ter", "Qui"], startTime: "14:00", endTime: "15:00", color: "#F59E0B" },
  { id: "5", name: "Intermédio A", teacher: "Ana Ferreira", teacherId: "t3", schedule: "Seg/Qua 16:00", level: "Intermédio", enrolled: 12, capacity: 12, room: "Piscina 1", days: ["Seg", "Qua"], startTime: "16:00", endTime: "17:00", color: "#EC4899" },
  { id: "6", name: "Intermédio B", teacher: "Pedro Oliveira", teacherId: "t4", schedule: "Ter/Qui 16:00", level: "Intermédio", enrolled: 11, capacity: 12, room: "Piscina 2", days: ["Ter", "Qui"], startTime: "16:00", endTime: "17:00", color: "#8B5CF6" },
  { id: "7", name: "Avançados A", teacher: "Ana Ferreira", teacherId: "t3", schedule: "Seg/Qua 18:00", level: "Avançado", enrolled: 12, capacity: 12, room: "Piscina 1", days: ["Seg", "Qua"], startTime: "18:00", endTime: "19:00", color: "#EF4444" },
  { id: "8", name: "Avançados B", teacher: "João Costa", teacherId: "t2", schedule: "Ter/Qui 18:00", level: "Avançado", enrolled: 10, capacity: 12, room: "Piscina 2", days: ["Ter", "Qui"], startTime: "18:00", endTime: "19:00", color: "#14B8A6" },
];

export const students: StudentData[] = [
  { id: "s1", name: "Beatriz Silva", email: "beatriz@email.com", phone: "912 345 678", birthDate: "2015-03-12", enrolledSince: "2024-09-01", classes: ["1"], attendance: 85 },
  { id: "s2", name: "Miguel Rodrigues", email: "miguel@email.com", phone: "913 456 789", birthDate: "2014-07-22", enrolledSince: "2024-09-01", classes: ["1"], attendance: 92 },
  { id: "s3", name: "Sofia Mendes", email: "sofia@email.com", phone: "914 567 890", birthDate: "2016-01-05", enrolledSince: "2024-10-01", classes: ["2"], attendance: 78 },
  { id: "s4", name: "Tomás Pereira", email: "tomas@email.com", phone: "915 678 901", birthDate: "2013-11-18", enrolledSince: "2024-09-01", classes: ["3"], attendance: 65 },
  { id: "s5", name: "Leonor Almeida", email: "leonor@email.com", phone: "916 789 012", birthDate: "2012-05-30", enrolledSince: "2023-09-01", classes: ["5", "7"], attendance: 95 },
  { id: "s6", name: "Guilherme Lopes", email: "guilherme@email.com", phone: "917 890 123", birthDate: "2011-08-14", enrolledSince: "2023-09-01", classes: ["7"], attendance: 88 },
  { id: "s7", name: "Mariana Costa", email: "mariana@email.com", phone: "918 901 234", birthDate: "2015-12-01", enrolledSince: "2025-01-15", classes: ["2"], attendance: 70 },
  { id: "s8", name: "Diogo Fernandes", email: "diogo@email.com", phone: "919 012 345", birthDate: "2014-04-09", enrolledSince: "2024-09-01", classes: ["3", "4"], attendance: 82 },
  { id: "s9", name: "Carolina Martins", email: "carolina@email.com", phone: "920 123 456", birthDate: "2013-09-25", enrolledSince: "2024-01-10", classes: ["6"], attendance: 91 },
  { id: "s10", name: "Francisco Sousa", email: "francisco@email.com", phone: "921 234 567", birthDate: "2012-02-17", enrolledSince: "2023-01-01", classes: ["8"], attendance: 76 },
];

export const teachers: TeacherData[] = [
  { id: "t1", name: "Maria Santos", email: "maria.santos@holmesplace.pt", classes: ["Iniciação A", "Iniciação B"], availability: "Seg–Sex 09:00–17:00", initials: "MS" },
  { id: "t2", name: "João Costa", email: "joao.costa@holmesplace.pt", classes: ["Básico A", "Básico B", "Avançados B"], availability: "Seg–Sex 10:00–19:00", initials: "JC" },
  { id: "t3", name: "Ana Ferreira", email: "ana.ferreira@holmesplace.pt", classes: ["Intermédio A", "Avançados A"], availability: "Seg–Qui 14:00–20:00", initials: "AF" },
  { id: "t4", name: "Pedro Oliveira", email: "pedro.oliveira@holmesplace.pt", classes: ["Intermédio B"], availability: "Ter/Qui 14:00–18:00", initials: "PO" },
  { id: "t5", name: "Rita Nunes", email: "rita.nunes@holmesplace.pt", classes: [], availability: "Seg–Sex 08:00–16:00 (Suplente)", initials: "RN" },
];

export const sessions: SessionData[] = [
  { id: "ss1", date: "2026-03-02", classId: "1", className: "Iniciação A", teacher: "Maria Santos", attendees: 7, total: 8, status: "Realizada" },
  { id: "ss2", date: "2026-03-02", classId: "3", className: "Básico A", teacher: "João Costa", attendees: 9, total: 10, status: "Realizada" },
  { id: "ss3", date: "2026-03-02", classId: "5", className: "Intermédio A", teacher: "Ana Ferreira", attendees: 11, total: 12, status: "Realizada" },
  { id: "ss4", date: "2026-03-03", classId: "1", className: "Iniciação A", teacher: "Maria Santos", attendees: 0, total: 8, status: "Pendente" },
  { id: "ss5", date: "2026-03-03", classId: "3", className: "Básico A", teacher: "João Costa", attendees: 0, total: 10, status: "Pendente" },
  { id: "ss6", date: "2026-03-03", classId: "5", className: "Intermédio A", teacher: "Ana Ferreira", attendees: 0, total: 12, status: "Pendente" },
  { id: "ss7", date: "2026-03-03", classId: "7", className: "Avançados A", teacher: "Ana Ferreira", attendees: 0, total: 12, status: "Pendente" },
  { id: "ss8", date: "2026-03-04", classId: "2", className: "Iniciação B", teacher: "Maria Santos", attendees: 0, total: 6, status: "Pendente" },
  { id: "ss9", date: "2026-03-04", classId: "4", className: "Básico B", teacher: "João Costa", attendees: 0, total: 9, status: "Pendente" },
  { id: "ss10", date: "2026-02-28", classId: "7", className: "Avançados A", teacher: "Ana Ferreira", attendees: 10, total: 12, status: "Realizada" },
  { id: "ss11", date: "2026-02-26", classId: "6", className: "Intermédio B", teacher: "", attendees: 0, total: 11, status: "Cancelada" },
];

export const alerts: AlertData[] = [
  { id: "a1", message: "Sessão sem professor — Intermédio B, Qui 16:00", type: "danger" },
  { id: "a2", message: "Turma Avançados A com lotação esgotada", type: "warning" },
  { id: "a3", message: "3 alunos com assiduidade abaixo de 70%", type: "info" },
];

export const substitutions: SubstitutionData[] = [
  { id: "sub1", date: "2026-03-05", className: "Intermédio A", reason: "Consulta médica", status: "Pendente" },
  { id: "sub2", date: "2026-02-20", className: "Avançados A", reason: "Formação externa", status: "Aprovada" },
  { id: "sub3", date: "2026-02-15", className: "Intermédio A", reason: "Motivo pessoal", status: "Recusada" },
];

export const levels = ["Iniciação", "Básico", "Intermédio", "Avançado"];
export const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
export const timeSlots = Array.from({ length: 13 }, (_, i) => `${String(8 + i).padStart(2, "0")}:00`);
