// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Top Bar styled after Apple */}
      <header className="flex items-center justify-center space-x-12 py-4 border-b">
        {/* Logo */}
        <div className="text-2xl font-bold">vaw</div>
        {/* Nav Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-gray-800">Home</Link>
          <Link to="/rules" className="hover:text-gray-800">Rules</Link>
          <Link to="/callouts" className="hover:text-gray-800">Callouts</Link>
          <Link to="/skills" className="hover:text-gray-800">Skills</Link>
          <Link to="/analysis" className="hover:text-gray-800">Analysis</Link>
          <Link to="/workouts" className="hover:text-gray-800">Workouts</Link>
          <Link to="/purchases" className="hover:text-gray-800">Purchases</Link>
        </nav>
        {/* Icons */}
        
      </header>

      {/* Hero Section styled like Apple promo */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x900/?volleyball-court"
          alt="Volleyball Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="bg-blue-600 text-white text-5xl font-bold px-8 py-4 rounded-3xl text-center">
            Elevate Your Game
          </div>
          <div className="mt-4 bg-white text-black text-xl px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            Get Started
          </div>
        </div>
      </section>
    </div>
  );
}
