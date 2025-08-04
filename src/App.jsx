// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home      from './pages/Home';
import Analysis  from './pages/Analysis';
import Rules     from './pages/Rules';
import Callouts  from './pages/Callouts';
import Workout   from './pages/Workout';
import Purchases from './pages/Purchases';
import Skills    from './pages/Skills';

export default function App() {
  return (
    <BrowserRouter>
      {/* 全体をダークバックに */}
      <div className="bg-gray-900 text-white min-h-screen">
        {/* NavBar */}
        <nav className="bg-black bg-opacity-80 p-4 flex flex-wrap gap-4">
          <Link to="/"         className="hover:text-yellow-400">Home</Link>
          <Link to="/analysis" className="hover:text-yellow-400">Analysis</Link>
          <Link to="/rules"    className="hover:text-yellow-400">Rules</Link>
          <Link to="/callouts" className="hover:text-yellow-400">Callouts</Link>
          <Link to="/workout"  className="hover:text-yellow-400">Workout</Link>
          <Link to="/purchases"className="hover:text-yellow-400">Purchases</Link>
          <Link to="/skills"   className="hover:text-yellow-400">Skills</Link>
        </nav>

        {/* ページコンテンツ */}
        <Routes>
          <Route path="/"          element={<Home      />} />
          <Route path="/analysis"  element={<Analysis  />} />
          <Route path="/rules"     element={<Rules     />} />
          <Route path="/callouts"  element={<Callouts  />} />
          <Route path="/workout"   element={<Workout   />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/skills"    element={<Skills    />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}