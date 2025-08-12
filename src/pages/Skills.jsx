// src/pages/Skills.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Skills() {
  const tabBase =
    "flex flex-col items-center px-4 py-3 rounded-lg transition text-sm sm:text-base w-32 text-center";
  const off = "text-gray-700 hover:bg-gray-200";
  const on = "bg-white shadow border";

  const skills = [
    { path: "serve", label: "Serve", desc: "Start the play with control" },
    { path: "dig", label: "Dig", desc: "Defend against a spike" },
    { path: "receive", label: "Receive", desc: "Handle the opponent's serve" },
    { path: "set", label: "Set", desc: "Assist for the spike" },
    { path: "spike", label: "Spike", desc: "Attack with power" },
    { path: "block", label: "Block", desc: "Stop the ball at the net" },
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Skills</h1>

      {/* Skills sub-nav with more spacing */}
      <nav className="flex flex-wrap gap-6 rounded-xl border p-4 bg-gray-100 justify-start sm:justify-center">
        {skills.map((skill) => (
          <NavLink
            key={skill.path}
            to={skill.path}
            className={({ isActive }) =>
              `${tabBase} ${isActive ? on : off}`
            }
          >
            <span className="font-medium">{skill.label}</span>
            <span className="mt-1 text-xs text-gray-500">{skill.desc}</span>
          </NavLink>
        ))}
      </nav>

      {/* Child page content */}
      <Outlet />
    </section>
  );
}
