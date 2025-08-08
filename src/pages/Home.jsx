// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple hero */}
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Volleyball AI Hub</h1>
        <p className="text-lg mb-8">
          Your all-in-one volleyball training & gear resource.
        </p>
        <Link
          to="/workout"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Go to Workout
        </Link>
      </div>

      {/* Feature highlights */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Routines</h3>
            <p>Tailored strength, plyo, and stamina programs just for you.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Skill Drills</h3>
            <p>Sharpen serve, set, spike, dig, and receive techniques.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Top Gear</h3>
            <p>Hand-picked nets, shoes, balls, and accessories.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Volleyball AI Hub</p>
      </footer>
    </div>
  );
}
