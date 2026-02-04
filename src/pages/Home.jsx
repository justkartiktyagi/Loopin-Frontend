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
      {/* NAVIGATION */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              LoopIN
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold"
          >
            Get Your Template
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
                Build Better Habits,{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Loop By Loop
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                LoopIN is your personalized{" "}
                <span className="font-semibold">
                  habit tracking spreadsheet
                </span>{" "}
                designed to help you transform your daily routines into positive
                habits.
              </p>
              <p className="mt-4 text-gray-600">
                We've crafted a comprehensive Excel template that tracks your
                progress, visualizes your wins, and keeps you accountable.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition transform font-semibold"
              >
                Get Your Habit Template Now
              </button>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 font-semibold">
                  Professional Excel Template
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Track • Analyze • Improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS LOOPIN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            What is LoopIN?
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            LoopIN isn't just another app—it's a complete habit tracking system
            delivered as a professional Excel spreadsheet.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Track Habits
              </h3>
              <p className="text-gray-700">
                Monitor daily habits with automatic tracking columns. See your
                progress in real-time and celebrate wins every single day.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Visualize Success
              </h3>
              <p className="text-gray-700">
                Built-in charts and graphs show your habit streaks, completion
                rates, and long-term trends at a glance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border border-cyan-200">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Build Momentum
              </h3>
              <p className="text-gray-700">
                Streaks, consistency scores, and metrics keep you motivated and
                accountable on your habit transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                ❌ The Problem
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✗ Forgot to track habits consistently</li>
                <li>✗ No visibility into your progress</li>
                <li>✗ Lost motivation without data</li>
                <li>✗ Too complicated to maintain</li>
                <li>✗ Can't see habit patterns</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-500">
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                ✅ LoopIN Solution
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Simple daily check-ins</li>
                <li>✓ Automatic progress visualization</li>
                <li>✓ Motivating streaks & stats</li>
                <li>✓ Easy-to-use Excel format</li>
                <li>✓ Identify what works best</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATE PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Template Includes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Habit Tracking Sheet
              </h3>
              <p className="text-gray-700">
                Pre-formatted columns for easy daily habit logging with
                color-coded completion status.
              </p>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 border-2 border-teal-200">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-700">
                Built-in charts showing completion rates, streaks, and trends
                over time.
              </p>
            </div>

            <div className="bg-cyan-50 rounded-2xl p-8 border-2 border-cyan-200">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Goal Setting
              </h3>
              <p className="text-gray-700">
                Define your habits and set realistic goals with automatic
                progress tracking.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Weekly Summary
              </h3>
              <p className="text-gray-700">
                Auto-calculated statistics showing your weekly performance and
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            How LoopIN Works
          </h2>
          <p className="text-emerald-100 mb-12 text-lg">
            Simple steps to start your habit transformation
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-3">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">Sign Up</h3>
              <p className="text-emerald-100">
                Enter your details for instant delivery
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-3">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">Receive Template</h3>
              <p className="text-emerald-100">
                Excel file delivered to your email
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-3">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">Customize</h3>
              <p className="text-emerald-100">Add your habits and goals</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-3">4️⃣</div>
              <h3 className="text-xl font-bold mb-2">Transform</h3>
              <p className="text-emerald-100">Track daily and build momentum</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose LoopIN?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="text-3xl">✨</div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Professional Quality
                </h3>
                <p className="text-gray-700 mt-1">
                  Created by productivity experts, designed with best practices
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-teal-50 rounded-xl border border-teal-200">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="font-bold text-gray-900">Instant Setup</h3>
                <p className="text-gray-700 mt-1">
                  No learning curve—start tracking within minutes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-cyan-50 rounded-xl border border-cyan-200">
              <div className="text-3xl">🔧</div>
              <div>
                <h3 className="font-bold text-gray-900">Fully Customizable</h3>
                <p className="text-gray-700 mt-1">
                  Adapt the template to your unique habits and goals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-3xl">💎</div>
              <div>
                <h3 className="font-bold text-gray-900">One-Time Investment</h3>
                <p className="text-gray-700 mt-1">
                  Lifetime access to your habit tracking system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <h2 className="text-4xl font-bold text-gray-900">
          Ready to Transform Your Habits?
        </h2>

        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Get instant access to your LoopIN habit tracking template and start
          your journey today.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl text-lg hover:shadow-xl hover:scale-105 transition transform font-semibold"
        >
          Get Started Now
        </button>

        <p className="mt-6 text-sm text-gray-600">
          ✓ Instant delivery ✓ Professional template ✓ Lifetime access
        </p>
      </section>

      {/* MODAL FORM */}
      {showForm && (
        <section className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <button
              onClick={() => {
                setShowForm(false);
                setReadyToPay(false);
              }}
              className="float-right text-gray-400 hover:text-gray-600 text-2xl font-light"
            >
              ✕
            </button>

            {!readyToPay ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Get Your Template
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  Join thousands transforming their habits with LoopIN
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl hover:shadow-lg transition font-semibold mt-6"
                  >
                    Continue to Payment
                  </button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-4">
                  🔒 Secure payment powered by PayPal
                </p>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Complete Your Purchase
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  One-time payment for lifetime access
                </p>
                <div className="mt-6">
                  <PayButton name={formData.name} email={formData.email} />
                </div>
              </>
            )}

            <button
              onClick={() => {
                setShowForm(false);
                setReadyToPay(false);
              }}
              className="mt-6 text-sm text-gray-500 hover:text-gray-700 w-full"
            >
              ← Back
            </button>
          </div>
        </section>
      )}
    </>
  );
}
