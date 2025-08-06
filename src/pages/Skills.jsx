// src/pages/Skills.jsx
import React from "react";
import { Link } from "react-router-dom";

const skillCards = [
  {
    id: "serve",
    title: "Serve",
    description:
      "Initiate every rally with power and precision—master both underhand and overhand serves to keep opponents off balance.",
    to: "/skills/serve",
  },
  {
    id: "set",
    title: "Set",
    description:
      "Orchestrate your team’s offense with crisp, accurate hands—deliver perfect balls for your hitters every time.",
    to: "/skills/set",
  },
  {
    id: "receive",
    title: "Receive",
    description:
      "Control the opposition’s serve with solid platform work and agile footwork to keep the play alive.",
    to: "/skills/receive",
  },
  {
    id: "dig",
    title: "Dig",
    description:
      "Extend, dive, and roll—save even the hardest-driven spikes with textbook defensive technique.",
    to: "/skills/dig",
  },
  {
    id: "spike",
    title: "Spike",
    description:
      "Approach, explode, and swing—refine your timing and placement to finish rallies in style.",
    to: "/skills/spike",
  },
  {
    id: "block",
    title: "Block",
    description:
      "Build an impenetrable wall at the net—hone your timing, footwork, and two-man block schemes.",
    to: "/skills/block",
  },
];

export default function Skills() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-4">
          Master Volleyball Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          This is where you can access and master all the essential volleyball
          skills. Click on any skill to dive deeper with drills, tutorials, and
          pro tips.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCards.map(({ id, title, description, to }) => (
          <div
            key={id}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-serif font-semibold mb-3 text-indigo-700">
              {title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
            <Link
              to={to}
              className="inline-block px-5 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
