import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'ASICS Gel-Rocket 10',
    desc: 'Affordable cushioning and grip for new players.',
    url: 'https://example.com/asics-gel-rocket'
  },
  {
    name: 'Mizuno Cyclone Speed 2',
    desc: 'Budget-friendly, lightweight mesh upper.',
    url: 'https://example.com/mizuno-speed'
  },
  {
    name: 'Under Armour Charged Commit',
    desc: 'Decent support, beginner’s price point.',
    url: 'https://example.com/ua-charged'
  }
];

export default function ShoesBudget() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Shoes</h1>
      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name} className="bg-gray-50 p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a href={it.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 underline">
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
