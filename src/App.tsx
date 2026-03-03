import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Login from "@/pages/Login";
import AppShell from "@/components/layout/AppShell";

import AdminDashboard from "@/pages/admin/Dashboard";
import AdminClasses from "@/pages/admin/Classes";
import ClassDetail from "@/pages/admin/ClassDetail";
import AdminStudents from "@/pages/admin/Students";
import StudentDetail from "@/pages/admin/StudentDetail";
import AdminTeachers from "@/pages/admin/Teachers";
import AdminClassMap from "@/pages/admin/ClassMap";
import AdminSessions from "@/pages/admin/Sessions";
import SessionDetail from "@/pages/admin/SessionDetail";
import AdminAvailability from "@/pages/admin/Availability";
import AdminReports from "@/pages/admin/Reports";
import AdminSettings from "@/pages/admin/Settings";

import TeacherDashboard from "@/pages/teacher/Dashboard";
import TeacherClasses from "@/pages/teacher/Classes";
import TeacherSubstitutions from "@/pages/teacher/Substitutions";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/admin" replace />} />

              {/* Admin routes */}
              <Route element={<AppShell />}>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/classes" element={<AdminClasses />} />
                <Route path="/admin/classes/:id" element={<ClassDetail />} />
                <Route path="/admin/students" element={<AdminStudents />} />
                <Route path="/admin/students/:id" element={<StudentDetail />} />
                <Route path="/admin/teachers" element={<AdminTeachers />} />
                <Route path="/admin/class-map" element={<AdminClassMap />} />
                <Route path="/admin/sessions" element={<AdminSessions />} />
                <Route path="/admin/sessions/:id" element={<SessionDetail />} />
                <Route path="/admin/availability" element={<AdminAvailability />} />
                <Route path="/admin/reports" element={<AdminReports />} />
                <Route path="/admin/settings" element={<AdminSettings />} />

                {/* Teacher routes */}
                <Route path="/teacher" element={<TeacherDashboard />} />
                <Route path="/teacher/classes" element={<TeacherClasses />} />
                <Route path="/teacher/class-map" element={<AdminClassMap />} />
                <Route path="/teacher/sessions/:id" element={<SessionDetail />} />
                <Route path="/teacher/substitutions" element={<TeacherSubstitutions />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
