import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Molten FLISTATEC Official Game Ball',
    desc: 'Fédération Internationale design, premium grip.',
    url: 'https://example.com/molten-flistatec'
  },
  {
    name: 'Mikasa V200W Official Indoor Ball',
    desc: 'Flawless flight and durability.',
    url: 'https://example.com/mikasa-v200w'
  },
  {
    name: 'Tachikara SV-5WSC Official Ball',
    desc: 'Well-balanced feel, used in NCAA.',
    url: 'https://example.com/tachikara-sv5wsc'
  }
];

export default function BallsStandard() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Standard Volleyballs</h1>
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
