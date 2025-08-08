import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

// Minimal placeholder pages
function Home()     { return <div style={{ padding: '2rem' }}><h1>Home</h1><p>App is working!</p></div>; }
function Rules()    { return <div style={{ padding: '2rem' }}><h1>Rules Page</h1></div>; }
function Callouts() { return <div style={{ padding: '2rem' }}><h1>Callouts Page</h1></div>; }
function Workout()  { return <div style={{ padding: '2rem' }}><h1>Workout Page</h1></div>; }
function Purchases(){ return <div style={{ padding: '2rem' }}><h1>Purchases Page</h1></div>; }

export default function App() {
  return (
    <div>
      {/* Simple nav */}
      <nav style={{ background: '#eee', padding: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/rules" style={{ marginRight: '1rem' }}>Rules</Link>
        <Link to="/callouts" style={{ marginRight: '1rem' }}>Callouts</Link>
        <Link to="/workout" style={{ marginRight: '1rem' }}>Workout</Link>
        <Link to="/purchases">Purchases</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/callouts" element={<Callouts />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/purchases" element={<Purchases />} />
        {/* catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
