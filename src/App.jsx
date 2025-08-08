// src/App.jsx
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// Minimal pages
function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home</h1>
      <p>This is your home page.</p>
    </div>
  );
}

function Workout() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Workout</h1>
      <p>Your workout content goes here.</p>
    </div>
  );
}

function Purchases() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Purchases</h1>
      <p>Recommended gear and equipment.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* Header/Nav */}
      <header style={{ background: '#f3f4f6', padding: '1rem 2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <Link to="/" style={{ marginRight: '1.5rem', color: '#374151', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/workout" style={{ marginRight: '1.5rem', color: '#374151', textDecoration: 'none' }}>
          Workout
        </Link>
        <Link to="/purchases" style={{ color: '#374151', textDecoration: 'none' }}>
          Purchases
        </Link>
      </header>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
