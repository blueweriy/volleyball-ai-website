// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="bg-black bg-opacity-80 p-4 flex flex-wrap gap-4">
        <Link to="/"         className="hover:text-yellow-400">Home</Link>
        <Link to="/analysis" className="hover:text-yellow-400">Analysis</Link>
        <Link to="/rules"    className="hover:text-yellow-400">Rules</Link>
        <Link to="/callouts" className="hover:text-yellow-400">Callouts</Link>
        <Link to="/workouts" className="hover:text-yellow-400">Workouts</Link>
        <Link to="/purchases"className="hover:text-yellow-400">Purchases</Link>
        <Link to="/skills"   className="hover:text-yellow-400">Skills</Link>
      </nav>

      <Routes>
        <Route path="/"          element={<Home      />} />
        <Route path="/analysis"  element={<Analysis  />} />
        <Route path="/rules"     element={<Rules     />} />
        <Route path="/callouts"  element={<Callouts  />} />
        <Route path="/workouts"  element={<Workout   />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/skills"    element={<Skills    />} />

        {/* skill sub-routes */}
        <Route path="/skills/serve"   element={<Serve   />} />
        <Route path="/skills/spike"   element={<Spike   />} />
        <Route path="/skills/set"     element={<Set     />} />
        <Route path="/skills/receive" element={<Receive />} />
        <Route path="/skills/block"   element={<Block   />} />
        <Route path="/skills/dig"     element={<Dig     />} />

        {/* catch-all */}
        <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
      </Routes>
    </div>
  );
}
