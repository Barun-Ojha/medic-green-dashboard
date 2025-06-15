
import { useEffect, useState } from "react";

type Props = {
  doctor: { name: string; avatarUrl: string } | null;
};

const Topbar = ({ doctor }: Props) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-hc-green-light shadow-sm">
      <div></div>
      <div className="flex items-center gap-6">
        <div className="text-hc-green text-sm font-medium">
          {now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" })}{" "}
          <span className="ml-2 font-mono">{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
        {doctor && (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-hc-green">{doctor.name}</span>
            <img
              src={doctor.avatarUrl}
              alt={doctor.name}
              className="w-10 h-10 rounded-full border-2 border-hc-green shadow"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
