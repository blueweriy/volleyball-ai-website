import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Analysis from "./Analysis";
import Callouts from "./Callouts";
import Rules from "./Rules";
// … import other page components

export default function App() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/rules" element={<Rules />} />
          {/* …other routes */}
        </Routes>
      </main>
    </>
  );
}
