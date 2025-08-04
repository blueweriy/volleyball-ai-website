// src/pages/Spike.jsx
import React from 'react';

export default function Spike() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Spiking & Vertical Jump</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Form Analysis</h2>
        <p>Track hip and shoulder alignment, arm swing, and knee bend.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Vertical Jump Tracker</h2>
        <p>Measure your jump height with a webcam-based pose detector to tailor plyometric workouts.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Drills & Advice</h2>
        <p>Get drill recommendations and video tutorials to improve your spike power.</p>
      </section>
    </div>
  );
}
