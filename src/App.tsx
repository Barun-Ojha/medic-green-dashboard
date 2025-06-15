
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Patients from "./pages/Patients";
import PatientProfile from "./pages/PatientProfile";
import PrescriptionGenerator from "./pages/PrescriptionGenerator";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

export type AuthState = {
  isLoggedIn: boolean;
  doctor: {
    name: string;
    avatarUrl: string;
  } | null;
};

export const defaultDoctor = {
  name: "Dr. Olivia Lewis",
  avatarUrl: "https://randomuser.me/api/portraits/women/43.jpg"
};

function App() {
  const [auth, setAuth] = useState<AuthState>({
    isLoggedIn: false,
    doctor: null
  });

  // Persist login using localStorage for demo
  useEffect(() => {
    const d = localStorage.getItem("doctor-auth");
    if (d) setAuth(JSON.parse(d));
  }, []);

  useEffect(() => {
    localStorage.setItem("doctor-auth", JSON.stringify(auth));
  }, [auth]);

  const handleLogin = (username: string, password: string) => {
    // Dummy auth logic (accept any)
    setAuth({
      isLoggedIn: true,
      doctor: defaultDoctor,
    });
  };

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, doctor: null });
    localStorage.removeItem("doctor-auth");
  };

  if (!auth.isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <DashboardLayout doctor={auth.doctor} onLogout={handleLogout} />
        }>
          <Route path="/" element={<Index />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:patientId" element={<PatientProfile />} />
          <Route path="/prescription" element={<PrescriptionGenerator />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
