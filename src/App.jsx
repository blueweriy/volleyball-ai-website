// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Top‐level pages
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Callouts from "./pages/Callouts";
import Purchases from "./pages/Purchases";
import Rules from "./pages/Rules";
import Skills from "./pages/Skills";
import Workout from "./pages/Workout";

// Skill sub-pages
import Serve    from "./pages/skillpages/Serve.jsx";
import Set      from "./pages/skillpages/Set.jsx";
import Receive  from "./pages/skillpages/Receive.jsx";
import Dig      from "./pages/skillpages/Dig.jsx";
import Spike    from "./pages/skillpages/Spike.jsx";
import Block    from "./pages/skillpages/Block.jsx";

// Workout sub-pages
import Plyometrics from "./pages/workout/Plyometrics.jsx";
import Strength    from "./pages/workout/Strength.jsx";
import Stamina     from "./pages/workout/Stamina.jsx";
import Injury      from "./pages/workout/Injury.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <Routes>
          {/* Top-level */}
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/workout" element={<Workout />} />

          {/* Skill detail */}
          <Route path="/skills/serve"   element={<Serve />} />
          <Route path="/skills/set"     element={<Set />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/dig"     element={<Dig />} />
          <Route path="/skills/spike"   element={<Spike />} />
          <Route path="/skills/block"   element={<Block />} />

          {/* Workout detail */}
          <Route path="/workout/plyometrics" element={<Plyometrics />} />
          <Route path="/workout/strength"    element={<Strength />} />
          <Route path="/workout/stamina"     element={<Stamina />} />
          <Route path="/workout/injury"      element={<Injury />} />

          {/* Fallback 404 could go here */}
        </Routes>
      </main>
    </>
  );
}
