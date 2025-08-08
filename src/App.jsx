// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Top-level pages
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Callouts from "./pages/Callouts";
import Purchases from "./pages/Purchases";
import Rules from "./pages/Rules";
import Skills from "./pages/Skills";
import Workout from "./pages/Workout";

// Skill sub-pages
import Serve from "./pages/skillpages/Serve";
import Set from "./pages/skillpages/Set";
import Receive from "./pages/skillpages/Receive";
import Dig from "./pages/skillpages/Dig";
import Spike from "./pages/skillpages/Spike";
import Block from "./pages/skillpages/Block";

// Workout sub-pages
import Plyometrics from "./pages/workout/Plyometrics";
import Strength from "./pages/workout/Strength";
import Stamina from "./pages/workout/Stamina";

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

          {/* Skill detail pages */}
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/dig" element={<Dig />} />
          <Route path="/skills/spike" element={<Spike />} />
          <Route path="/skills/block" element={<Block />} />

          {/* Workout detail pages */}
          <Route path="/workout/plyometrics" element={<Plyometrics />} />
          <Route path="/workout/strength" element={<Strength />} />
          <Route path="/workout/stamina" element={<Stamina />} />

          {/* Fallback 404 could go here */}
        </Routes>
      </main>
    </>
  );
}
