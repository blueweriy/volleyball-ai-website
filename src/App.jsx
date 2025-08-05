// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home      from './pages/Home';
import Rules     from './pages/Rules';
import Callouts  from './pages/Callouts';
import Skills    from './pages/Skills';
import Analysis  from './pages/Analysis';
import Workout   from './pages/Workout';
import Purchases from './pages/Purchases';

// skill pages
import Serve   from './pages/skillpages/Serve';
import Spike   from './pages/skillpages/Spike';
import Set     from './pages/skillpages/Set';
import Receive from './pages/skillpages/Receive';
import Block   from './pages/skillpages/Block';
import Dig     from './pages/skillpages/Dig';

export default function App() {
  return (
    <Router basename="/">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
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

      {/* Content */}
      <main className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/spike" element={<Spike />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/block" element={<Block />} />
          <Route path="/skills/dig" element={<Dig />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/workouts" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />
          {/* Redirect unknown to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}
