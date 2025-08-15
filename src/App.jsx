// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

// Top-level pages
import Home from "./pages/Home.jsx";
import Rules from "./pages/Rules.jsx";
import Callouts from "./pages/Callouts.jsx";
import Analysis from "./pages/Analysis.jsx";
import Workout from "./pages/Workout.jsx";
import Purchases from "./pages/Purchases.jsx";
import Skills from "./pages/Skills.jsx";

// Skills detail pages
import Serve from "./pages/skillpages/Serve.jsx";
import Dig from "./pages/skillpages/Dig.jsx";
import Receive from "./pages/skillpages/Receive.jsx";
import Set from "./pages/skillpages/Set.jsx";
import Spike from "./pages/skillpages/Spike.jsx";
import Block from "./pages/skillpages/Block.jsx";

// Workout detail pages
import Plyometrics from "./pages/workout/Plyometrics.jsx";
import Strength from "./pages/workout/Strength.jsx";
import Stamina from "./pages/workout/Stamina.jsx";
import Injury from "./pages/workout/Injury.jsx";

// Purchases category pages (all in same folder)
import Nets from "./pages/purchases/Nets.jsx";
import NetsBudget from "./pages/purchases/NetsBudget.jsx";
import NetsStandard from "./pages/purchases/NetsStandard.jsx";
import NetsPremium from "./pages/purchases/NetsPremium.jsx";

import Shoes from "./pages/purchases/Shoes.jsx";
import ShoesBudget from "./pages/purchases/ShoesBudget.jsx";
import ShoesStandard from "./pages/purchases/ShoesStandard.jsx";
import ShoesPremium from "./pages/purchases/ShoesPremium.jsx";

import Balls from "./pages/purchases/Balls.jsx";
import BallsBudget from "./pages/purchases/BallsBudget.jsx";
import BallsStandard from "./pages/purchases/BallsStandard.jsx";
import BallsPremium from "./pages/purchases/BallsPremium.jsx";

import Accessories from "./pages/purchases/Accessories.jsx";
import KneePads from "./pages/purchases/KneePads.jsx";
import AnkleBraces from "./pages/purchases/AnkleBraces.jsx";
import Cones from "./pages/purchases/Cones.jsx";

function NotFound() {
  return <div className="py-8 px-6">Not found</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Routes>
          {/* Top-level */}
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/skills" element={<Skills />} />

          {/* Skills */}
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/dig" element={<Dig />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/spike" element={<Spike />} />
          <Route path="/skills/block" element={<Block />} />

          {/* Workout */}
          <Route path="/workout/plyometrics" element={<Plyometrics />} />
          <Route path="/workout/strength" element={<Strength />} />
          <Route path="/workout/stamina" element={<Stamina />} />
          <Route path="/workout/injury" element={<Injury />} />

          {/* Purchases */}
          <Route path="/purchases/nets" element={<Nets />} />
          <Route path="/purchases/nets/budget" element={<NetsBudget />} />
          <Route path="/purchases/nets/standard" element={<NetsStandard />} />
          <Route path="/purchases/nets/premium" element={<NetsPremium />} />

          <Route path="/purchases/shoes" element={<Shoes />} />
          <Route path="/purchases/shoes/budget" element={<ShoesBudget />} />
          <Route path="/purchases/shoes/standard" element={<ShoesStandard />} />
          <Route path="/purchases/shoes/premium" element={<ShoesPremium />} />

          <Route path="/purchases/balls" element={<Balls />} />
          <Route path="/purchases/balls/budget" element={<BallsBudget />} />
          <Route path="/purchases/balls/standard" element={<BallsStandard />} />
          <Route path="/purchases/balls/premium" element={<BallsPremium />} />

          <Route path="/purchases/accessories" element={<Accessories />} />
          <Route path="/purchases/accessories/knee-pads" element={<KneePads />} />
          <Route path="/purchases/accessories/ankle-braces" element={<AnkleBraces />} />
          <Route path="/purchases/accessories/cones" element={<Cones />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
