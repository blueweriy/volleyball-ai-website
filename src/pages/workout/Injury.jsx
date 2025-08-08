import React from 'react';
import { Link } from 'react-router-dom';

export default function Injury() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Injury Prevention</h1>
      <p className="text-lg mb-6">
        Stay healthy with mobility drills, stability exercises, and smart recovery tips.
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Warm up thoroughly before each session.</li>
        <li>Include dynamic stretches targeting shoulders, hips, and ankles.</li>
        <li>Balance strength work with mobility drills.</li>
        <li>Listen to your body—modify if discomfort persists.</li>
        <li>Consult a medical professional for pain lasting &gt; 72 hours.</li>
        <li>Maintain general fitness (cardio/core) while isolating the injury.</li>
      </ul>

      <Link to="/workout" className="mt-8 inline-block text-blue-600 underline">
        ← Back to Workout
      </Link>
    </div>
  );
}
