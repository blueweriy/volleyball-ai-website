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

// Skill detail pages (standalone)
import Serve from "./pages/skillpages/Serve.jsx";
import Dig from "./pages/skillpages/Dig.jsx";
import Receive from "./pages/skillpages/Receive.jsx";
import Set from "./pages/skillpages/Set.jsx";
import Spike from "./pages/skillpages/Spike.jsx";
import Block from "./pages/skillpages/Block.jsx";

// Workout detail pages (standalone) — match your real paths (src/pages/workout/*)
import Plyometrics from "./pages/workout/Plyometrics.jsx";
import Strength from "./pages/workout/Strength.jsx";
import Stamina from "./pages/workout/Stamina.jsx";
import Injury from "./pages/workout/Injury.jsx";

// Purchases category pages (src/pages/purchases/*)
import Nets from "./pages/purchases/Nets.jsx";
import Shoes from "./pages/purchases/Shoes.jsx";
import Balls from "./pages/purchases/Balls.jsx";
import Accessories from "./pages/purchases/Accessories.jsx";

// Optional: if you add deeper detail pages later, import them here
// e.g. import NetsBudget from "./pages/purchases/nets/Budget.jsx";

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

          {/* Skills (standalone pages) */}
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/dig" element={<Dig />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/spike" element={<Spike />} />
          <Route path="/skills/block" element={<Block />} />

          {/* Workout (standalone pages) — matches src/pages/workout/* */}
          <Route path="/workout/plyometrics" element={<Plyometrics />} />
          <Route path="/workout/strength" element={<Strength />} />
          <Route path="/workout/stamina" element={<Stamina />} />
          <Route path="/workout/injury" element={<Injury />} />

          {/* Purchases categories */}
          <Route path="/purchases/nets" element={<Nets />} />
          <Route path="/purchases/shoes" element={<Shoes />} />
          <Route path="/purchases/balls" element={<Balls />} />
          <Route path="/purchases/accessories" element={<Accessories />} />

          {/* Example future deep routes (uncomment when you add files) */}
          {/*
          <Route path="/purchases/nets/budget" element={<NetsBudget />} />
          <Route path="/purchases/nets/standard" element={<NetsStandard />} />
          <Route path="/purchases/nets/premium" element={<NetsPremium />} />
          // ...same idea for shoes/balls/accessories
          */}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
