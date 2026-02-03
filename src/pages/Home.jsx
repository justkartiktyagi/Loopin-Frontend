import { useState } from "react";
import PayButton from "../components/PayButton";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [readyToPay, setReadyToPay] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill all details");
      return;
    }
    setReadyToPay(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">LoopIN</h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          LoopIN is an automated access and delivery system that removes
          friction between action and outcome.
        </p>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          No logins. No dashboards. Just instant delivery when it matters.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-10 bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            The Problem LoopIN Solves
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Most systems force users through unnecessary steps — accounts,
            verification emails, dashboards, and delays.
          </p>

          <p className="mt-4 text-gray-600 text-lg">
            LoopIN removes friction by focusing on one thing:
            <span className="font-semibold"> instant automated delivery.</span>
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          What Makes LoopIN Different?
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800">Automated</h3>
            <p className="mt-3 text-gray-600">
              Every action triggers automated processing without manual work.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800">Minimal</h3>
            <p className="mt-3 text-gray-600">
              No accounts. No passwords. No dashboards. Just essentials.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800">Reliable</h3>
            <p className="mt-3 text-gray-600">
              Every request is tracked and delivered accurately.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">How LoopIN Works</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl mb-3">①</div>
              <p className="text-gray-600">User clicks Buy</p>
            </div>
            <div>
              <div className="text-3xl mb-3">②</div>
              <p className="text-gray-600">Details are recorded</p>
            </div>
            <div>
              <div className="text-3xl mb-3">③</div>
              <p className="text-gray-600">Payment is processed</p>
            </div>
            <div>
              <div className="text-3xl mb-3">④</div>
              <p className="text-gray-600">Access delivered via email</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Experience LoopIN?
        </h2>

        <p className="mt-4 text-gray-600">
          Enter your details and receive instant access.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-8 bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-indigo-700 transition"
        >
          Continue
        </button>
      </section>

      {/* MODAL FORM */}
      {showForm && (
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Your Access
            </h3>

            {!readyToPay ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                >
                  Proceed to Payment
                </button>
              </form>
            ) : (
              <div className="mt-6">
                <PayButton name={formData.name} email={formData.email} />
              </div>
            )}

            <button
              onClick={() => {
                setShowForm(false);
                setReadyToPay(false);
              }}
              className="mt-6 text-sm text-gray-500 hover:underline w-full"
            >
              Cancel
            </button>
          </div>
        </section>
      )}
    </>
  );
}
