// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home      from './pages/Home';
import Analysis  from './pages/Analysis';
import Rules     from './pages/Rules';
import Callouts  from './pages/Callouts';
import Workout   from './pages/Workout';
import Purchases from './pages/Purchases';
import Skills    from './pages/Skills';

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
      {/* Global wrapper with light background */}
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

        {/* Apple-style top navigation */}
        <header className="flex items-center justify-center py-4 border-b bg-white">
          {/* Logo */}
          <div className="absolute left-8 text-2xl font-bold">vaw</div>

          {/* Centered nav links */}
          <nav className="flex space-x-8 text-sm font-medium">
            <Link to="/"         className="hover:text-gray-800">Home</Link>
            <Link to="/rules"    className="hover:text-gray-800">Rules</Link>
            <Link to="/callouts" className="hover:text-gray-800">Callouts</Link>
            <Link to="/skills"   className="hover:text-gray-800">Skills</Link>
            <Link to="/analysis" className="hover:text-gray-800">Analysis</Link>
            <Link to="/workouts" className="hover:text-gray-800">Workouts</Link>
            <Link to="/purchases"className="hover:text-gray-800">Purchases</Link>
          </nav>

          {/* Placeholder right side */}
          <div className="absolute right-8 w-24" />
        </header>

        {/* Main content routes */}
        <Routes>
          <Route path="/"          element={<Home      />} />
          <Route path="/rules"     element={<Rules     />} />
          <Route path="/callouts"  element={<Callouts  />} />
          <Route path="/skills"    element={<Skills    />} />
          <Route path="/analysis"  element={<Analysis  />} />
          <Route path="/workouts"  element={<Workout   />} />
          <Route path="/purchases" element={<Purchases />} />

          {/* Skill sub-pages */}
          <Route path="/skills/serve"   element={<Serve   />} />
          <Route path="/skills/spike"   element={<Spike   />} />
          <Route path="/skills/set"     element={<Set     />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/block"   element={<Block   />} />
          <Route path="/skills/dig"     element={<Dig     />} />

          {/* 404 fallback */}
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
