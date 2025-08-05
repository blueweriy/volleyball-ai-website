// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
    <Router>
      {/* Top navigation */}
      <header className="bg-white border-b">
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

      {/* Main content */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/workouts" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />

          {/* Skill pages */}
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/spike" element={<Spike />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/block" element={<Block />} />
          <Route path="/skills/dig" element={<Dig />} />

          {/* 404 fallback */}
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
