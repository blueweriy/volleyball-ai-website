// src/pages/Analysis.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Analysis() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title & Badge */}
        <div className="relative inline-block mb-8">
          <h1 className="text-4xl font-extrabold mb-2">Video Analysis</h1>
          <span className="absolute -top-3 -right-10 bg-yellow-300 text-yellow-800 text-xs uppercase font-bold px-2 py-1 rounded">
            Coming Soon
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-12">
          Our AI-driven video breakdown will help you dissect every serve, spike, and block—
          analyzing angles, speed, and form to level up your game.
        </p>

        {/* Teaser Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Trajectory Tracking</h3>
            <p className="text-gray-700">
              Visualize ball flight paths and predict landing zones.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Technique Breakdown</h3>
            <p className="text-gray-700">
              Frame-by-frame analysis of your form to highlight improvement areas.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Performance Insights</h3>
            <p className="text-gray-700">
              Auto-generated metrics on speed, reaction time, and consistency.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
