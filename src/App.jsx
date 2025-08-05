import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Callouts from "./pages/Callouts";
import Purchases from "./pages/Purchases";
import Rules from "./pages/Rules";
import Skills from "./pages/Skills";
import Workout from "./pages/Workout";

// skillpages sub‐routes
import Block   from "./pages/skillpages/Block";
import Dig     from "./pages/skillpages/Dig";
import Receive from "./pages/skillpages/Receive";
import Serve   from "./pages/skillpages/Serve";
import Set     from "./pages/skillpages/Set";
import Spike   from "./pages/skillpages/Spike";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/analysis" element={<Analysis />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/workout" element={<Workout />} />

          {/* Skill detail pages */}
          <Route path="/skills/block" element={<Block />} />
          <Route path="/skills/dig" element={<Dig />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/spike" element={<Spike />} />

          {/* Fallback 404 could go here */}
        </Routes>
      </main>
    </>
  );
}
