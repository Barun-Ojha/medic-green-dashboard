
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SidebarNav from "../components/SidebarNav";
import Topbar from "../components/Topbar";

type LayoutProps = {
  doctor: {
    name: string;
    avatarUrl: string;
  } | null;
  onLogout: () => void;
};

const DashboardLayout = ({ doctor, onLogout }: LayoutProps) => {
  const location = useLocation();
  const nav = useNavigate();

  return (
    <div className="flex min-h-screen bg-dashboard">
      <SidebarNav onLogout={onLogout} />
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar doctor={doctor} />
        <main className="p-6 flex-1 min-h-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
