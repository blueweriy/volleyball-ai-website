// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Top-level pages
import Home      from './pages/Home';
import Rules     from './pages/Rules';
import Callouts  from './pages/Callouts';
import Workout   from './pages/Workout';
import Purchases from './pages/Purchases';

// Workout sub-pages
import Plyometrics from './pages/workout/Plyometrics';
import Strength    from './pages/workout/Strength';
import Stamina     from './pages/workout/Stamina';
import Injury      from './pages/workout/Injury';

// Purchases sub-pages
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
    <BrowserRouter>
      <Routes>
        {/* Main pages */}
        <Route path="/"                element={<Home />} />
        <Route path="/rules"           element={<Rules />} />
        <Route path="/callouts"        element={<Callouts />} />
        <Route path="/workout"         element={<Workout />} />
        <Route path="/purchases"       element={<Purchases />} />

        {/* Workout detail routes */}
        <Route path="/workout/plyometrics" element={<Plyometrics />} />
        <Route path="/workout/strength"     element={<Strength />} />
        <Route path="/workout/stamina"      element={<Stamina />} />
        <Route path="/workout/injury"       element={<Injury />} />

        {/* Purchases detail routes */}
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

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
