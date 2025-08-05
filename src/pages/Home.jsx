import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen bg-white">
      <div className="text-center max-w-2xl space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Elevate Your Volleyball Game
        </h1>
        <p className="text-lg text-gray-700">
          AI-powered stroke analysis, play heatmaps, and real-time stats.
        </p>
        <Link
          to="/analysis"
          className="inline-block px-6 py-3 border border-gray-900 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
