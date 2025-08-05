// src/pages/Home.jsx
import React from 'react';

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background volleyball action image */}
      <img
        src="https://source.unsplash.com/1600x900/?volleyball,action"
        alt="Volleyball action"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-white bg-opacity-75 p-8">
        <h1 className="text-5xl font-extrabold mb-6">Elevate Your Volleyball Game</h1>
        <p className="text-lg max-w-3xl text-center mb-8">
          Get real-time AI-powered video analysis, personalized drills, and expert coaching tips—all in one place.
        </p>
        <a
          href="/analysis"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Start Analysis
        </a>
      </div>
    </div>
  );
}
