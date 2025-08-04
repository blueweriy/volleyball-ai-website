import React from 'react';

export default function Spike() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Spiking & Vertical Jump</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Form Analysis</h2>
        <p>Track hip alignment, arm swing, and knee bend for optimal spike technique.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Vertical Jump Tracker</h2>
        <p>Measure your jump height via webcam-based pose detection to customize workouts.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Drills & Advice</h2>
        <p>Get plyometric drills and video tutorials to boost your spiking power.</p>
      </section>
    </div>
  );
}
