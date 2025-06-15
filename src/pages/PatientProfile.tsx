
import { useParams, useNavigate } from "react-router-dom";

const dummyProfiles: Record<string, any> = {
  "1": {
    name: "John Smith",
    age: 35,
    height: 180,
    weight: 80,
    bmi: 24.7,
    bp: "130/85",
    spo2: 98,
    history: "Diagnosed with hypertension (2020), regular annual checkups.",
    prescriptions: [
      { date: "2025-03-10", details: "Amlodipine 5mg, daily" },
      { date: "2024-11-01", details: "Lifestyle counseling" },
    ],
    symptoms: "Mild headache, dizziness",
  },
  "2": {
    name: "Emily Johnson",
    age: 29,
    height: 164,
    weight: 55,
    bmi: 20.4,
    bp: "120/75",
    spo2: 99,
    history: "Asthma since childhood. Allergy to pollen.",
    prescriptions: [
      { date: "2025-05-20", details: "Salbutamol inhaler PRN" }
    ],
    symptoms: "Shortness of breath",
  },
  "3": {
    name: "Michael Lee",
    age: 49,
    height: 170,
    weight: 90,
    bmi: 31.1,
    bp: "145/95",
    spo2: 96,
    history: "Type 2 diabetes, hypertension; on medication.",
    prescriptions: [
      { date: "2025-05-01", details: "Metformin 500mg BID" }
    ],
    symptoms: "Leg cramp",
  },
};

const PatientProfile = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const nav = useNavigate();
  const profile = dummyProfiles[patientId ?? ""];

  if (!profile) {
    return (
      <div className="w-full max-w-xl mx-auto text-center py-12">
        <div className="text-red-600 mb-4">Patient not found.</div>
        <button className="bg-hc-green text-white px-6 py-2 rounded" onClick={() => nav("/patients")}>Back</button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center mb-8 gap-6">
        <button className="text-hc-green underline" onClick={() => nav("/patients")}>← Back to Patients</button>
        <h2 className="text-2xl font-bold text-hc-green">{profile.name}</h2>
      </div>
      <div className="bg-white rounded-xl shadow border border-hc-green-light p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div>
            <div className="text-sm text-gray-500">Age</div>
            <div className="font-medium text-lg">{profile.age}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Height</div>
            <div className="font-medium text-lg">{profile.height} cm</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Weight</div>
            <div className="font-medium text-lg">{profile.weight} kg</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">BMI</div>
            <div className="font-medium text-lg">{profile.bmi}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Blood Pressure</div>
            <div className="font-medium text-lg">{profile.bp}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">SpO₂</div>
            <div className="font-medium text-lg">{profile.spo2} %</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-hc-green mb-2">Medical History</div>
          <div className="bg-hc-green-light rounded p-3">{profile.history}</div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-hc-green mb-2">Past Prescriptions</div>
          {profile.prescriptions.map((p: any, idx: number) => (
            <div key={idx} className="flex justify-between bg-gray-50 border border-hc-green-light rounded p-2 mb-2">
              <span>{p.date}</span>
              <span>{p.details}</span>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold text-hc-green mb-2">Current Symptoms</div>
          <div className="bg-hc-green-light rounded p-3">{profile.symptoms}</div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
