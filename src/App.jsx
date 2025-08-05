// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Apple-style top navigation */}
        <header className="fixed top-0 left-0 right-0 bg-white border-b z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-center py-4 relative">
            {/* Logo */}
            <div className="absolute left-4 text-2xl font-bold">vaw</div>

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
          </div>
        </header>

        {/* Spacer for fixed header */}
        <div className="h-16"></div>

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

          {/* Fallback */}
          <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
