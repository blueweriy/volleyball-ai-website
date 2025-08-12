import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Top-level pages
import Home from "./pages/Home.jsx";
import Rules from "./pages/Rules.jsx";
import Callouts from "./pages/Callouts.jsx";
import Analysis from "./pages/Analysis.jsx";
import Workout from "./pages/workout/Workout.jsx";
import Purchases from "./pages/Purchases.jsx";

// Skills (layout) + skill subpages
import Skills from "./pages/Skills.jsx";
import Serve from "./pages/skillpages/Serve.jsx";
import Dig from "./pages/skillpages/Dig.jsx";
import Receive from "./pages/skillpages/Receive.jsx";
import Set from "./pages/skillpages/Set.jsx";
import Spike from "./pages/skillpages/Spike.jsx";
import Block from "./pages/skillpages/Block.jsx";

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-xl font-semibold mb-2">Page not found</h2>
      <p>Check the URL or use the navigation above.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav Bar (simple absolute paths, like before) */}
      <header className="bg-gray-100 shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="flex justify-center space-x-8 py-4"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            <li><Link to="/"           className="text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link to="/rules"      className="text-gray-700 hover:text-gray-900">Rules</Link></li>
            <li><Link to="/callouts"   className="text-gray-700 hover:text-gray-900">Callouts</Link></li>
            <li><Link to="/skills"     className="text-gray-700 hover:text-gray-900">Skills</Link></li>
            <li><Link to="/analysis"   className="text-gray-700 hover:text-gray-900">Analysis</Link></li>
            <li><Link to="/workout"    className="text-gray-700 hover:text-gray-900">Workout</Link></li>
            <li><Link to="/purchases"  className="text-gray-700 hover:text-gray-900">Purchases</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />

          {/* Skills section: layout + child routes */}
          <Route path="/skills" element={<Skills />}>
            {/* default landing when visiting /skills */}
            <Route index element={<div className="text-gray-600">Choose a skill above to begin.</div>} />
            <Route path="serve" element={<Serve />} />
            <Route path="dig" element={<Dig />} />
            <Route path="receive" element={<Receive />} />
            <Route path="set" element={<Set />} />
            <Route path="spike" element={<Spike />} />
            <Route path="block" element={<Block />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
