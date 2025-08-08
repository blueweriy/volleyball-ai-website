import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Champion Plastic Training Cones (10-pack)',
    desc: 'Bright, stackable cones for agility drills.',
    url: 'https://example.com/champion-cones'
  },
  {
    name: 'Nike Hexagon Agility Cones (6-pack)',
    desc: 'Low-profile, hex-shaped for stability on turf.',
    url: 'https://example.com/nike-hex-cones'
  },
  {
    name: 'SKLZ Speed Training Cones (20-pack)',
    desc: 'Versatile set for footwork, marking boundaries.',
    url: 'https://example.com/sklz-speed'
  }
];

export default function Cones() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Training Cones</h1>
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
