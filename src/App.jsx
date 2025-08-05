// this is your Layout component
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold">vaw</div>
          <nav className="flex space-x-6 text-sm font-medium">
            <Link to="/">Home</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/callouts">Callouts</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/analysis">Analysis</Link>
            <Link to="/workouts">Workouts</Link>
            <Link to="/purchases">Purchases</Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-grow pt-4">
        <Outlet />
      </main>
    </div>
  );
}
