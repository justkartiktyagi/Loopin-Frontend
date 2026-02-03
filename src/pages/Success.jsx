export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>
        <p className="mt-4 text-gray-600">
          Your access link has been sent to your email.
        </p>
      </div>
    </div>
  );
}
