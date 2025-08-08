import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Baden Championship Net System',
    desc: 'Pro-grade net plus adjustable telescoping posts and winch tensioner.',
    url: 'https://example.com/baden-championship'
  },
  {
    name: 'All-Star Deluxe Competition Set',
    desc: 'Includes wind-resistant posts, net bag, and heavy-duty ground stakes.',
    url: 'https://example.com/allstar-deluxe'
  },
  {
    name: 'Pro-Select Elite Net',
    desc: 'Vinyl-coated center line, top tension rope, built for tournament play.',
    url: 'https://example.com/proselect-elite'
  }
];

export default function NetsPremium() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Premium Volleyball Nets</h1>
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
