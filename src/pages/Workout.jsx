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
        Choose a program to focus on: explosive power, raw strength, or lasting stamina.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/workout/plyometrics"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">Plyometrics</h2>
          <p className="text-gray-700 leading-relaxed">
            Jump, bound, and sprint drills to build explosive power.
          </p>
          <span className="mt-4 inline-block text-indigo-600 font-medium hover:underline">
            Start →
          </span>
        </Link>
        <Link
          to="/workout/strength"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">Strength</h2>
          <p className="text-gray-700 leading-relaxed">
            Leg and upper-body routines for muscle and power.
          </p>
          <span className="mt-4 inline-block text-indigo-600 font-medium hover:underline">
            Start →
          </span>
        </Link>
        <Link
          to="/workout/stamina"
          className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">Stamina</h2>
          <p className="text-gray-700 leading-relaxed">
            Endurance circuits to keep you in the rally longer.
          </p>
          <span className="mt-4 inline-block text-indigo-600 font-medium hover:underline">
            Start →
          </span>
        </Link>
      </div>
    </div>
  );
}
