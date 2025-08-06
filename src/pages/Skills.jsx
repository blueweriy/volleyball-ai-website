// src/pages/Skills.jsx
import React from "react";
import { Link } from "react-router-dom";

const skillCards = [
  {
    id: "serve",
    title: "Serve",
    description: "Initiate every rally with power and precision—master both underhand and overhand serves.",
    to: "/skills/serve",
  },
  {
    id: "set",
    title: "Set",
    description: "Orchestrate the offense with clean, accurate hands to deliver perfect balls to your hitters.",
    to: "/skills/set",
  },
  {
    id: "receive",
    title: "Receive",
    description: "Control the serve with solid platform work and footwork to keep the rally alive.",
    to: "/skills/receive",
  },
  {
    id: "dig",
    title: "Dig",
    description: "Dive, roll, and extend to save even the hardest-driven spikes off the floor.",
    to: "/skills/dig",
  },
  {
    id: "spike",
    title: "Spike",
    description: "Approach, jump, and swing—develop timing and placement to crush the ball every time.",
    to: "/skills/spike",
  },
  {
    id: "block",
    title: "Block",
    description: "Form an impenetrable wall with footwork, timing, and two-man block schemes.",
    to: "/skills/block",
  },
];

export default function Skills() {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Master Volleyball Skills
      </h1>
      <p className="text-lg text-center mb-10">
        This is where you can access and master all the basic skills in volleyball. Click into each
        module to dive deeper, watch tutorials, and practice drills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCards.map(({ id, title, description, to }) => (
          <div
            key={id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
            <Link
              to={to}
              className="inline-block text-indigo-600 font-medium hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
