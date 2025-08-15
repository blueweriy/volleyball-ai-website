// src/pages/purchases/AnkleBraces.jsx
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "McDavid Ankle Brace",
    desc: "Dual-strap figure-8 design for maximum support.",
    url: "https://example.com/mcdavid-ankle"
  },
  {
    name: "ASO Ankle Stabilizer",
    desc: "Popular lace-up brace for moderate sprains.",
    url: "https://example.com/aso-stabilizer"
  },
  {
    name: "Shock Doctor Ultra Wrap",
    desc: "Wraparound with adjustable tension straps.",
    url: "https://example.com/shockdoctor-wrap"
  }
];

export default function AnkleBraces() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Ankle Braces</h1>

      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name} className="bg-gray-50 p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 underline"
            >
              View on Store →
            </a>
          </li>
        ))}
      </ul>

      <Link to="/purchases" className="mt-8 inline-block text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </section>
  );
}
