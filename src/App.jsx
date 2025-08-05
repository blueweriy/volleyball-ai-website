import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar   from "./components/Navbar.jsx";
import Home     from "./Home.jsx";
import Analysis from "./Analysis.jsx";
import Callouts from "./Callouts.jsx";
import Rules    from "./Rules.jsx";
// …and any other pages you have, e.g.
// import Purchases from "./Purchases.jsx";
// import Skills    from "./Skills.jsx";

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
          {/* …other <Route>s */}
        </Routes>
      </main>
    </>
  );
}
