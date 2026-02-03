export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-red-600">Payment Cancelled</h1>
        <p className="mt-3 text-gray-600">You can try again anytime.</p>
      </div>
    </div>
  );
}
