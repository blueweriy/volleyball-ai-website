// src/App.jsx
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
// (other imports omitted for brevity)

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav Bar */}
      <header className="bg-gray-100 shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="flex justify-center space-x-8 py-4"
            style={{ listStyle: 'none', margin: 0, padding: 0 }}
          >
            <li><Link to="/"         className="text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link to="/rules"    className="text-gray-700 hover:text-gray-900">Rules</Link></li>
            <li><Link to="/callouts" className="text-gray-700 hover:text-gray-900">Callouts</Link></li>
            <li><Link to="/skills"   className="text-gray-700 hover:text-gray-900">Skills</Link></li>
            <li><Link to="/analysis" className="text-gray-700 hover:text-gray-900">Analysis</Link></li>
            <li><Link to="/workout"  className="text-gray-700 hover:text-gray-900">Workout</Link></li>
            <li><Link to="/purchases" className="text-gray-700 hover:text-gray-900">Purchases</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-6 px-4 sm:px-6 lg:px-8">
        {/* ... your <Routes> here ... */}
      </main>
    </div>
  );
}
