import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md border-2 border-emerald-500">
        <div className="text-7xl mb-6 animate-bounce">🎉</div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-700 text-lg mb-2">
          Welcome to your LoopIN journey! 🚀
        </p>
        <p className="text-gray-600 mb-8">
          Your habit tracking template has been sent to your email. Check your
          inbox for the Excel file and start tracking today!
        </p>

        <div className="bg-emerald-50 rounded-xl p-6 mb-8 border border-emerald-200">
          <p className="text-sm text-gray-700 mb-3 font-semibold">
            📧 Next Steps:
          </p>
          <ul className="text-left space-y-2 text-sm text-gray-600">
            <li>✓ Check your email for the LoopIN template</li>
            <li>✓ Download the Excel file</li>
            <li>✓ Add your habits and goals</li>
            <li>✓ Start tracking tomorrow!</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition"
        >
          Return Home
        </button>

        <p className="text-xs text-gray-500 mt-6">
          Redirecting in 8 seconds...
        </p>
      </div>
    </div>
  );
}
