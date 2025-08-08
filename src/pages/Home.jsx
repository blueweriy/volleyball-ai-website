// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-serif font-bold mb-8">Volleyball AI Hub</h1>
        <p className="text-lg mb-12">
          Welcome! Pick a section below to get started.
        </p>
        <nav className="space-y-4">
          <Link to="/rules"      className="block text-2xl text-blue-600 underline">Rules</Link>
          <Link to="/callouts"   className="block text-2xl text-blue-600 underline">Callouts</Link>
          <Link to="/workout"    className="block text-2xl text-blue-600 underline">Workout</Link>
          <Link to="/purchases"  className="block text-2xl text-blue-600 underline">Purchases</Link>
        </nav>
      </div>
    </div>
  );
}
