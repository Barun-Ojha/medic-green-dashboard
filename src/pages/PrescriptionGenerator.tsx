
import { useState } from "react";

const PrescriptionGenerator = () => {
  const [symptoms, setSymptoms] = useState("");
  const [output, setOutput] = useState("");
  const [editing, setEditing] = useState(false);

  const handleGenerate = () => {
    // Dummy Data: Generate prescription based on symptoms (simulate output)
    if (!symptoms.trim()) {
      setOutput("");
      setEditing(false);
      return;
    }
    setOutput(
      `Prescription for: ${symptoms}\n\n- Paracetamol 500mg, 1 tablet twice daily for 5 days\n- Drink plenty of water and rest\n- Follow-up if symptoms worsen`
    );
    setEditing(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-hc-green mb-6">Prescription Generator</h2>
      <div className="bg-white rounded-xl shadow border border-hc-green-light p-8 mb-8">
        <label className="block mb-2 text-hc-green font-semibold" htmlFor="symptoms">Enter Patient Symptoms:</label>
        <textarea
          id="symptoms"
          className="w-full min-h-[80px] border border-hc-green-light rounded mb-4 p-2 focus:outline-none focus:ring-2 focus:ring-hc-green"
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
          placeholder="e.g. cough, fever, sore throat"
        />
        <button
          className="bg-hc-green text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition mb-4"
          onClick={handleGenerate}
          type="button"
        >
          Generate Prescription
        </button>
        {output && (
          <div>
            <div className="mb-2 flex justify-between items-center">
              <span className="font-semibold text-hc-green">Generated Prescription:</span>
              {!editing && (
                <button
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => setEditing(true)}
                  type="button"
                >
                  Modify
                </button>
              )}
            </div>
            {editing ? (
              <textarea
                className="w-full border border-hc-green-light rounded mb-2 p-2"
                value={output}
                onChange={e => setOutput(e.target.value)}
              />
            ) : (
              <pre className="whitespace-pre-wrap bg-hc-green-light rounded p-4 border">{output}</pre>
            )}
            {editing && (
              <button
                className="mt-2 bg-hc-green text-white px-4 py-1 rounded"
                onClick={() => setEditing(false)}
                type="button"
              >
                Save
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrescriptionGenerator;
