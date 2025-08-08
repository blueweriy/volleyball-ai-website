// src/App.jsx
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// Minimal Home page
function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home</h1>
      <p>This is your home page.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* Header/Nav */}
      <header className="bg-gray-100 py-4 shadow">
        <div className="max-w-6xl mx-auto px-6 flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          {/* We'll add more links/routes after this test */}
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Catch-all to Home for now */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
