import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Franklin Sports PVC Training Ball',
    desc: 'Durable PVC for repetitive practice.',
    url: 'https://example.com/franklin-pvc'
  },
  {
    name: 'Molten Recreational Volleyball',
    desc: 'Soft cover, great for drills.',
    url: 'https://example.com/molten-recreational'
  },
  {
    name: 'Tachikara Sensi-Touch Training Ball',
    desc: 'Good feel, budget friendly.',
    url: 'https://example.com/tachikara-sensi'
  }
];

export default function BallsBudget() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Budget Volleyballs</h1>
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
