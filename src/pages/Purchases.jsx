// src/pages/Purchases.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Purchases() {
  const categories = [
    {
      path: "/purchases/nets",
      label: "Volleyball Nets",
      desc: "From backyard sets to competition-grade systems.",
    },
    {
      path: "/purchases/shoes",
      label: "Volleyball Shoes",
      desc: "Grip, cushioning, and support for every position.",
    },
    {
      path: "/purchases/balls",
      label: "Volleyballs",
      desc: "Practice to pro-grade game balls.",
    },
    {
      path: "/purchases/accessories",
      label: "Accessories & Gear",
      desc: "Knee pads, ankle braces, cones, and more.",
    },
  ];

  return (
    <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6 text-center">
          Recommended Purchases
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Pick a category to see curated picks and buying tips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((c) => (
            <Link
              key={c.path}
              to={c.path}
              className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow no-underline"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {c.label}
              </h2>
              <p className="text-gray-800 leading-relaxed">{c.desc}</p>
              <span className="mt-4 inline-block text-gray-900 font-medium">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
