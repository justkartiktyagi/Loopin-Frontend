import { useNavigate } from "react-router-dom";

export default function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md border-2 border-red-500">
        <div className="text-7xl mb-6">⚠️</div>
        <h1 className="text-3xl font-bold text-red-600 mb-3">
          Payment Cancelled
        </h1>
        <p className="text-gray-700 mb-6">
          No worries! Your payment wasn't processed. You can try again anytime.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
          <p className="text-sm text-gray-700 font-semibold mb-3">
            💡 Having trouble?
          </p>
          <p className="text-sm text-gray-600">
            If you experienced any issues with payment, feel free to try again
            or contact support.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition mb-3"
        >
          Try Again
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
        >
          Return Home
        </button>

        <p className="text-xs text-gray-500 mt-6">
          Your information was not saved. Start fresh whenever you're ready.
        </p>
      </div>
    </div>
  );
}
