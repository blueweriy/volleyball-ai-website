// src/pages/Workout.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Workout() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Workout Programs
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Select a focused training block—each designed to build a key athletic
        quality for volleyball performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Link
          to="/workout/plyometrics"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Plyometrics
          </h2>
          <p className="text-gray-900 leading-relaxed">
            Explosive jump and landing drills to boost vertical leap and reaction speed.
          </p>
          <span className="mt-4 inline-block text-gray-900 font-medium">
            Start →
          </span>
        </Link>

        <Link
          to="/workout/strength"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Strength
          </h2>
          <p className="text-gray-900 leading-relaxed">
            Foundational leg and upper-body lifts to build power and injury resilience.
          </p>
          <span className="mt-4 inline-block text-gray-900 font-medium">
            Start →
          </span>
        </Link>

        <Link
          to="/workout/stamina"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Stamina
          </h2>
          <p className="text-gray-900 leading-relaxed">
            Interval and circuit routines to sustain high intensity through long matches.
          </p>
          <span className="mt-4 inline-block text-gray-900 font-medium">
            Start →
          </span>
        </Link>

        <Link
          to="/workout/injury"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Injury Prevention
          </h2>
          <p className="text-gray-900 leading-relaxed">
            Mobility, stability, and care protocols to stay healthy and recover.
          </p>
          <span className="mt-4 inline-block text-gray-900 font-medium">
            Learn More →
          </span>
        </Link>
      </div>
    </div>
  );
}
