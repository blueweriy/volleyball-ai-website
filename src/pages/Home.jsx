// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Apple-style header removed: navigation in App.jsx */}

      {/* Hero Section with promo bubbles */}
      <section className="relative h-screen overflow-hidden">
        {/* Background volleyball image */}
        <img
          src="https://source.unsplash.com/1600x900/?volleyball"
          alt="Volleyball court"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for brightness */}
        <div className="absolute inset-0 bg-white opacity-60" />

        {/* Chat bubble promo content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 space-y-6">
          <div className="bg-blue-600 text-white text-5xl font-bold rounded-3xl px-8 py-4 max-w-lg text-center">
            Elevate Your Spike & Serve
          </div>
          <div className="bg-blue-600 text-white text-3xl rounded-3xl px-6 py-3 max-w-md text-center">
            AI-driven form analysis at your fingertips
          </div>
          <Link
            to="/analysis"
            className="mt-4 bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
