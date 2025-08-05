// src/pages/Rules.jsx
import React from 'react';

export default function Rules() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background volleyball court image */}
      <img
        src="https://source.unsplash.com/1600x900/?volleyball,court"
        alt="Volleyball court"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-white bg-opacity-75 p-8">
        <h1 className="text-5xl font-extrabold mb-6">Volleyball Rules & Basics</h1>
        <p className="text-lg max-w-3xl text-center mb-8">
          Learn the official volleyball rules, scoring system, court layout, and basic gameplay mechanics to get started.
        </p>
        <ul className="text-left list-disc list-inside space-y-4 text-base max-w-xl">
          <li><strong>Teams:</strong> Two teams of six players each, rotating positions clockwise.</li>
          <li><strong>Scoring:</strong> Rally scoring up to 25 points, win by 2; fifth set to 15.</li>
          <li><strong>Serve:</strong> Behind end line, must clear the net.</li>
          <li><strong>Hits:</strong> Max three contacts per side; no consecutive touches by the same player.</li>
          <li><strong>Net Rules:</strong> No touching or reaching over the net during play.</li>
        </ul>
      </div>
    </div>
  );
}
