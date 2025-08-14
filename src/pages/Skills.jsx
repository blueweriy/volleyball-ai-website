// src/pages/Skills.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  const skills = [
    {
      path: "/skills/serve",
      label: "Serve",
      desc:
        "Start each rally with accuracy and intent. Float, topspin, jump-serve, toss control, and target zones.",
      cta: "Open →",
    },
    {
      path: "/skills/receive",
      label: "Receive",
      desc:
        "Handle the opponent’s serve cleanly. Platform angles, footwork, seam calls, and first-touch routines.",
      cta: "Open →",
    },
    {
      path: "/skills/set",
      label: "Set",
      desc:
        "Deliver hittable balls consistently. Hand shape, release timing, footwork patterns, and tempo (1, 2, Go, Hut).",
      cta: "Open →",
    },
    {
      path: "/skills/spike",
      label: "Spike",
      desc:
        "Convert sets into points. Approach rhythm (left-right-left), arm swing, contact height, and tool/roll options.",
      cta: "Open →",
    },
    {
      path: "/skills/dig",
      label: "Dig",
      desc:
        "Keep attacks off the floor. Read hitters, move early, control rebounds, and transition to offense.",
      cta: "Open →",
    },
    {
      path: "/skills/block",
      label: "Block",
      desc:
        "Disrupt the attack at the net. Eye work, hand positioning over the tape, sealing seams, and timing.",
      cta: "Open →",
    },
  ];

  return (
    <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-4 text-center">
          Volleyball Skills
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Pick a skill to learn the key mechanics, coaching cues, and drills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((s) => (
            <Link
              key={s.path}
              to={s.path}  // absolute path -> loads a separate page
              className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow no-underline"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {s.label}
              </h2>
              <p className="text-gray-800 leading-relaxed">{s.desc}</p>
              <span className="mt-4 inline-block text-gray-900 font-medium">
                {s.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
