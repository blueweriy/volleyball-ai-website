// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Top Bar styled after Samsung */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo / Branding */}
        <div className="text-3xl font-bold">vaw</div>
        {/* Navigation links */}
        <nav className="flex space-x-8 text-lg font-medium">
          <Link to="/"         className="hover:text-gray-700">Home</Link>
          <Link to="/rules"    className="hover:text-gray-700">Rules</Link>
          <Link to="/callouts" className="hover:text-gray-700">Callouts</Link>
          <Link to="/skills"   className="hover:text-gray-700">Skills</Link>
          <Link to="/analysis" className="hover:text-gray-700">Analysis</Link>
          <Link to="/workouts" className="hover:text-gray-700">Workouts</Link>
          <Link to="/purchases"className="hover:text-gray-700">Purchases</Link>
        </nav>
        {/* Placeholder to balance spacing */}
        <div className="w-24"></div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://source.unsplash.com/random/1600x900?volleyball"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-16">
          <h1 className="text-7xl font-extrabold text-white mb-4">vaw</h1>
          <p className="text-2xl text-white mb-6 max-w-xl">
            Elevate your game with AI-driven volleyball insights.
          </p>
          <Link
            to="/analysis"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
