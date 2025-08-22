// src/pages/purchases/NetsBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Patiassy Portable Volleyball Net Set (14 ft)',
    desc: 'Freestanding/travel set with adjustable height and carry bag—solid value under $100.',
    url: 'https://www.amazon.com/Patiassy-Volleyball-Portable-Training-Adjustable/dp/B0CTMJTLD9'
  },
  {
    name: 'Zdgao Portable Volleyball Set',
    desc: 'Full set with net, pump, boundary lines, and poles—well-reviewed and usually under $100.',
    url: 'https://www.amazon.com/Zdgao-Outdoor-Portable-Volleyball-System/dp/B0BV7L8CCJ'
  },
  {
    name: 'Apex Sports 12′ Adjustable Volleyball Training Net',
    desc: '12′ portable net with fiberglass poles and adjustable regulation height (7.4–8 ft); consistently available under $100.',
    url: 'https://www.amazon.com/Apex-Sports-Adjustable-Volleyball-Training/dp/B0DT252Z36'
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
