// src/App.jsx (Layout)
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header styled like Apple */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo clickable to home */}
          <Link to="/" className="text-2xl font-bold hover:opacity-75">vac</Link>

          {/* Centered navigation links */}
          <nav className="flex space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-gray-800">Home</Link>
            <Link to="/rules" className="hover:text-gray-800">Rules</Link>
            <Link to="/callouts" className="hover:text-gray-800">Callouts</Link>
            <Link to="/skills" className="hover:text-gray-800">Skills</Link>
            <Link to="/analysis" className="hover:text-gray-800">Analysis</Link>
            <Link to="/workouts" className="hover:text-gray-800">Workouts</Link>
            <Link to="/purchases" className="hover:text-gray-800">Purchases</Link>
          </nav>

          {/* Optional placeholder for icons to the right */}
          <div className="w-6" />
        </div>
      </header>

      {/* Page content */}
      <main className="flex-grow pt-4">
        <Outlet />
      </main>
    </div>
  );
}
