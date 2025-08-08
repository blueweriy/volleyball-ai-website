import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Tachikara Official Indoor/Outdoor Net',
    desc: 'Official height and width, weather-resistant cord and straps.',
    url: 'https://example.com/tachikara-official-net'
  },
  {
    name: 'Mikasa Competition Net',
    desc: 'Heavy-duty vinyl-coated cable and UV-resistant mesh.',
    url: 'https://example.com/mikasa-competition-net'
  },
  {
    name: 'Champion Sports Heavy-Duty Net',
    desc: 'Reinforced poles available separately, good for leagues.',
    url: 'https://example.com/champion-heavy-net'
  }
];

export default function NetsStandard() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Standard Volleyball Nets</h1>
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
