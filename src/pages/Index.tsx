
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard or login page
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <div className="animate-spin h-10 w-10 border-4 border-spritle-blue border-t-transparent rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold mb-2">Loading Spritle Employee Verse</h1>
        <p className="text-gray-600 dark:text-gray-400">Please wait...</p>
      </div>
    </div>
  );
};

export default Index;
