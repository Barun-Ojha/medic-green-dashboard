
import { NavLink, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Props = {
  onLogout: () => void;
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/patients", label: "Patients" },
  { to: "/prescription", label: "Prescription Generator" },
];

const SidebarNav = ({ onLogout }: Props) => {
  const { pathname } = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-hc-green-light h-screen shadow-sm">
      <div className="py-6 px-8 text-hc-green text-2xl font-bold tracking-wide">
        HealthClinic
      </div>
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-2">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                end
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded transition font-medium ${
                    isActive
                      ? "bg-hc-green text-white"
                      : "text-hc-green hover:bg-hc-green-light"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-4 mt-auto px-8">
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 rounded py-2 font-semibold transition"
        >
          <ArrowLeft size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SidebarNav;
