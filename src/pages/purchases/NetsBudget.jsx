// src/pages/purchases/NetsBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Patiassy Portable Volleyball Net Set (14 ft)',
    desc: 'Freestanding/travel set, under $100, adjustable height—great for casual outdoor use.',
    url: 'https://www.amazon.com/Patiassy-Volleyball-Portable-Training-Adjustable/dp/B0CTMJTLD9'
  },
  {
    name: 'Furypiont 12 ft Portable Volleyball Training Net',
    desc: 'Adjustable 6 ft/7.4 ft/8 ft height options, includes 2 balls—typically under $100.',
    url: 'https://www.amazon.com/Furypiont-Volleyball-Bag-Outdoor-Freestanding-Adjustable/dp/B0DK3HX3TQ'
  },
  {
    name: 'Warmounts 18 ft Freestanding Volleyball Net',
    desc: 'Larger set with adjustable height, quick setup—comes in under $100 on select deals.',
    url: 'https://www.amazon.com/Warmounts-Freestanding-Volleyball-Adjustable-Equipment/dp/B0DZWTXL7T'
  }
];

export default function NetsBudget() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Nets (Under $100)</h1>

      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name} className="p-0">
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              View on Amazon →
            </a>
          </li>
        ))}
      </ul>

      <Link to="/purchases" className="mt-8 inline-block text-blue-600 hover:underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
