import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Skills() {
  const tabBase = "px-3 py-2 rounded-lg transition text-sm sm:text-base";
  const off = "text-gray-700 hover:bg-gray-200";
  const on  = "bg-white shadow border";

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Skills</h1>

      {/* Use RELATIVE paths here (no leading slash) */}
      <nav className="flex flex-wrap gap-2 rounded-xl border p-2 bg-gray-100">
        <NavLink to="serve"   className={({isActive}) => `${tabBase} ${isActive ? on : off}`}>Serve</NavLink>
        <NavLink to="dig"     className={({isActive}) => `${tabBase} ${isActive ? on : off}`}>Dig</NavLink>
        <NavLink to="receive" className={({isActive}) => `${tabBase} ${isActive ? on : off}`}>Receive</NavLink>
        <NavLink to="set"     className={({isActive}) => `${tabBase} ${isActive ? on : off}`}>Set</NavLink>
        <NavLink to="spike"   className={({isActive}) => `${tabBase} ${isActive ? on : off}`}>Spike</NavLink>
        <NavLink to="block"   className={({isActive}) => `${tabBase} ${isActive ? on : off}`}>Block</NavLink>
      </nav>

      {/* This is where /skills/* children render */}
      <Outlet />

      {/* Optional index message */}
      {/* <p className="text-gray-600">Choose a skill above to begin.</p> */}
    </section>
  );
}
