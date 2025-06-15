
import { useNavigate } from "react-router-dom";

const patientList = [
  {
    id: "1",
    name: "John Smith",
    age: 35,
    appointment: "2025-06-16 10:00",
    diagnosis: "Hypertension",
  },
  {
    id: "2",
    name: "Emily Johnson",
    age: 29,
    appointment: "2025-06-17 14:30",
    diagnosis: "Asthma",
  },
  {
    id: "3",
    name: "Michael Lee",
    age: 49,
    appointment: "2025-06-18 09:15",
    diagnosis: "Diabetes",
  },
];

const Patients = () => {
  const nav = useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-hc-green">Patients</h2>
      </div>
      <div className="bg-white rounded-xl shadow border border-hc-green-light">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="p-4 text-left text-hc-green">Name</th>
              <th className="p-4 text-left text-hc-green">Age</th>
              <th className="p-4 text-left text-hc-green">Appointment</th>
              <th className="p-4 text-left text-hc-green">Diagnosis</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {patientList.map(p => (
              <tr key={p.id} className="border-t hover:bg-hc-green-light transition">
                <td className="p-4">{p.name}</td>
                <td className="p-4">{p.age}</td>
                <td className="p-4">{p.appointment}</td>
                <td className="p-4">{p.diagnosis}</td>
                <td className="p-4">
                  <button
                    className="bg-hc-green text-white font-medium px-5 py-1.5 rounded hover:bg-green-700 transition"
                    onClick={() => nav(`/patients/${p.id}`)}
                  >
                    View Full Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
