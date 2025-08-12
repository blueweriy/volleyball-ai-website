// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// --- Import your page components ---
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Callouts from "./pages/Callouts";
import Skills from "./pages/Skills";
import Serves from "./pages/Serves"; // new serves page
import Analysis from "./pages/Analysis";
import Workout from "./pages/Workout";
import Purchases from "./pages/Purchases";
import NotFound from "./pages/NotFound"; // optional 404 page

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav Bar */}
      <header className="bg-gray-100 shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="flex justify-center space-x-8 py-4"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            <li><Link to="/"          className="text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link to="/rules"     className="text-gray-700 hover:text-gray-900">Rules</Link></li>
            <li><Link to="/callouts"  className="text-gray-700 hover:text-gray-900">Callouts</Link></li>
            <li><Link to="/skills"    className="text-gray-700 hover:text-gray-900">Skills</Link></li>
            <li><Link to="/skills/serves" className="text-gray-700 hover:text-gray-900">Serves</Link></li>
            <li><Link to="/analysis"  className="text-gray-700 hover:text-gray-900">Analysis</Link></li>
            <li><Link to="/workout"   className="text-gray-700 hover:text-gray-900">Workout</Link></li>
            <li><Link to="/purchases" className="text-gray-700 hover:text-gray-900">Purchases</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/serves" element={<Serves />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
