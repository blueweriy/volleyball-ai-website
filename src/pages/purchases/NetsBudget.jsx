import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Spalding Backyard Net',
    desc: 'Affordable 14x1m net, easy to set up and durable for casual games.',
    url: 'https://example.com/spalding-backyard-net'
  },
  {
    name: 'Park & Sun Multi-Use Net',
    desc: 'Portable and adjustable height—great for grass or sand.',
    url: 'https://example.com/park-sun-net'
  },
  {
    name: 'Franklin Sports Budget Net',
    desc: 'Lightweight frame with quick-release poles, under $50.',
    url: 'https://example.com/franklin-budget-net'
  }
];

export default function NetsBudget() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Nets</h1>
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
    </div>
  );
}
