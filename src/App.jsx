// src/App.jsx
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

// Top-level pages
import Home      from './pages/Home';
import Rules     from './pages/Rules';
import Callouts  from './pages/Callouts';
import Workout   from './pages/Workout';
import Purchases from './pages/Purchases';
import Skills    from './pages/Skills';
import Analysis  from './pages/Analysis';

// Workout detail pages
import Plyometrics from './pages/workout/Plyometrics';
import Strength    from './pages/workout/Strength';
import Stamina     from './pages/workout/Stamina';
import Injury      from './pages/workout/Injury';

// Purchases detail pages
import NetsBudget    from './pages/purchases/NetsBudget';
import NetsStandard  from './pages/purchases/NetsStandard';
import NetsPremium   from './pages/purchases/NetsPremium';
import ShoesBudget   from './pages/purchases/ShoesBudget';
import ShoesStandard from './pages/purchases/ShoesStandard';
import ShoesPremium  from './pages/purchases/ShoesPremium';
import BallsBudget   from './pages/purchases/BallsBudget';
import BallsStandard from './pages/purchases/BallsStandard';
import BallsPremium  from './pages/purchases/BallsPremium';
import KneePads      from './pages/purchases/KneePads';
import AnkleBraces   from './pages/purchases/AnkleBraces';
import Cones         from './pages/purchases/Cones';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header/Nav */}
      <header className="bg-gray-100 shadow" style={{ padding: '1rem 2rem' }}>
        <div className="max-w-6xl mx-auto flex justify-center space-x-8">
          <Link to="/"         className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/rules"    className="text-gray-700 hover:text-gray-900">Rules</Link>
          <Link to="/callouts" className="text-gray-700 hover:text-gray-900">Callouts</Link>
          <Link to="/skills"   className="text-gray-700 hover:text-gray-900">Skills</Link>
          <Link to="/analysis" className="text-gray-700 hover:text-gray-900">Analysis</Link>
          <Link to="/workout"  className="text-gray-700 hover:text-gray-900">Workout</Link>
          <Link to="/purchases" className="text-gray-700 hover:text-gray-900">Purchases</Link>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Routes>
            {/* Main pages */}
            <Route path="/"          element={<Home />} />
            <Route path="/rules"     element={<Rules />} />
            <Route path="/callouts"  element={<Callouts />} />
            <Route path="/skills"    element={<Skills />} />
            <Route path="/analysis"  element={<Analysis />} />
            <Route path="/workout"   element={<Workout />} />
            <Route path="/purchases" element={<Purchases />} />

            {/* Workout sub-routes */}
            <Route path="/workout/plyometrics" element={<Plyometrics />} />
            <Route path="/workout/strength"     element={<Strength />} />
            <Route path="/workout/stamina"      element={<Stamina />} />
            <Route path="/workout/injury"       element={<Injury />} />

            {/* Purchases sub-routes */}
            <Route path="/purchases/nets/budget"   element={<NetsBudget />} />
            <Route path="/purchases/nets/standard" element={<NetsStandard />} />
            <Route path="/purchases/nets/premium"  element={<NetsPremium />} />
            <Route path="/purchases/shoes/budget"   element={<ShoesBudget />} />
            <Route path="/purchases/shoes/standard" element={<ShoesStandard />} />
            <Route path="/purchases/shoes/premium"  element={<ShoesPremium />} />
            <Route path="/purchases/balls/budget"   element={<BallsBudget />} />
            <Route path="/purchases/balls/standard" element={<BallsStandard />} />
            <Route path="/purchases/balls/premium"  element={<BallsPremium />} />
            <Route path="/purchases/accessories/knee-pads"   element={<KneePads />} />
            <Route path="/purchases/accessories/ankle-braces" element={<AnkleBraces />} />
            <Route path="/purchases/accessories/cones"        element={<Cones />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
