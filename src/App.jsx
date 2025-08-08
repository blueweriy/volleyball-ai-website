// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// top-level pages
import Home from './pages/Home';
import Workout from './pages/Workout';
import Purchases from './pages/Purchases';

// workout pages
import Plyometrics from './pages/workout/Plyometrics';
import Strength     from './pages/workout/Strength';
import Stamina      from './pages/workout/Stamina';
import Injury       from './pages/workout/Injury';

// purchase detail pages
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* main */}
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/purchases" element={<Purchases />} />

        {/* workout sub-routes */}
        <Route path="/workout/plyometrics" element={<Plyometrics />} />
        <Route path="/workout/strength"     element={<Strength />} />
        <Route path="/workout/stamina"      element={<Stamina />} />
        <Route path="/workout/injury"       element={<Injury />} />

        {/* purchases sub-routes */}
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

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
