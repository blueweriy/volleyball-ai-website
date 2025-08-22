// src/pages/purchases/ShoesBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'ASICS Gel-Rocket 10 Volleyball Shoes',
    desc: 'Popular court shoe with excellent grip and cushioning, typically under $60.',
    url: 'https://www.amazon.com/ASICS-Gel-Rocket-Volleyball-Shoes-Velvet/dp/B09WC7N8YR'
  },
  {
    name: 'Mizuno Cyclone Speed 3 Volleyball Shoe',
    desc: 'Lightweight, stable, beginner-friendly indoor shoe with solid cushioning.',
    url: 'https://www.amazon.com/Mizuno-Womens-Cyclone-Speed-Volleyball/dp/B09KPF5XPN'
  },
  {
    name: 'Under Armour Charged Commit Trainer',
    desc: 'Cross-training court shoe with dual-density cushioning and flex grooves for stability.',
    url: 'https://www.amazon.com/Under-Armour-Charged-Commit-Trainer/dp/B08YNPHZZQ'
  }
];

export default function ShoesBudget() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Shoes</h1>

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
