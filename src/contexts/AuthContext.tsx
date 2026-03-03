import React, { createContext, useContext, useState, useEffect } from "react";

type Role = "admin" | "teacher";

interface AuthContextType {
  isLoggedIn: boolean;
  role: Role;
  userName: string;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  switchRole: (role: Role) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("logged_in") === "true");
  const [role, setRole] = useState<Role>(() => (localStorage.getItem("role") as Role) || "admin");
  const [userName, setUserName] = useState(() => localStorage.getItem("user_name") || "Carlos Mendes");

  const login = (email: string, _password: string) => {
    const isTeacher = email.toLowerCase().includes("professor") || email.toLowerCase().includes("teacher");
    const r: Role = isTeacher ? "teacher" : "admin";
    const name = isTeacher ? "Ana Ferreira" : "Carlos Mendes";
    setIsLoggedIn(true);
    setRole(r);
    setUserName(name);
    localStorage.setItem("logged_in", "true");
    localStorage.setItem("role", r);
    localStorage.setItem("user_name", name);
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("logged_in");
    localStorage.removeItem("role");
    localStorage.removeItem("user_name");
  };

  const switchRole = (r: Role) => {
    setRole(r);
    localStorage.setItem("role", r);
    setUserName(r === "teacher" ? "Ana Ferreira" : "Carlos Mendes");
    localStorage.setItem("user_name", r === "teacher" ? "Ana Ferreira" : "Carlos Mendes");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, userName, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};
