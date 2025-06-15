
const Index = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <div className="bg-white rounded-lg shadow p-8 border border-hc-green-light text-center">
        <h1 className="text-3xl font-bold mb-4 text-hc-green">Welcome, Doctor!</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is your healthcare clinic dashboard. Use the sidebar to view patients, generate prescriptions, and manage your workflow.
        </p>
        <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" alt="doctor" className="mx-auto rounded-lg shadow-lg w-56" />
      </div>
    </div>
  );
};

export default Index;
