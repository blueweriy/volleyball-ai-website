// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Rules from "./pages/Rules.jsx";
import Callouts from "./pages/Callouts.jsx";
import Analysis from "./pages/Analysis.jsx";
import Workout from "./pages/Workout.jsx";
import Purchases from "./pages/Purchases.jsx";

import Skills from "./pages/Skills.jsx";               // index grid page
import Serve from "./pages/skillpages/Serve.jsx";       // individual pages
import Dig from "./pages/skillpages/Dig.jsx";
import Receive from "./pages/skillpages/Receive.jsx";
import Set from "./pages/skillpages/Set.jsx";
import Spike from "./pages/skillpages/Spike.jsx";
import Block from "./pages/skillpages/Block.jsx";

function NotFound() { return <div className="py-8">Not found</div>; }

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />

          {/* Skills: index page + separate full pages */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/serve" element={<Serve />} />
          <Route path="/skills/dig" element={<Dig />} />
          <Route path="/skills/receive" element={<Receive />} />
          <Route path="/skills/set" element={<Set />} />
          <Route path="/skills/spike" element={<Spike />} />
          <Route path="/skills/block" element={<Block />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
