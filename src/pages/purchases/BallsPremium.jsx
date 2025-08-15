// src/pages/purchases/BallsPremium.jsx
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Molten V5M5000 Premium Indoor Ball",
    desc: "Engineered for elite performance and consistency.",
    url: "https://www.amazon.com/dp/B004L4P0W4", // Molten V5M5000
  },
  {
    name: "Mikasa VLS300 Official Gold Medal Series",
    desc: "High-tech composite leather cover.",
    url: "https://www.amazon.com/dp/B004U7N5M6", // Mikasa VLS300
  },
  {
    name: "Tachikara Gold Medal Composite",
    desc: "Superior touch and long-term durability.",
    url: "https://www.amazon.com/dp/B001FXVQ9G", // Tachikara Gold Medal
  },
];

export default function BallsPremium() {
  return (
    <section className="space-y-6 pl-12 pr-6 max-w-4xl">
      <h1 className="text-3xl font-semibold">Premium Volleyballs</h1>

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
              View on Amazon →
            </a>
          </li>
        ))}
      </ul>

      <Link
        to="/purchases"
        className="mt-8 inline-block text-blue-600 underline"
      >
        ← Back to Purchases
      </Link>
    </section>
  );
}
