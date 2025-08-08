import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'ASICS Sky Elite 2',
    desc: 'High-end stability, Gel technology for shock absorption.',
    url: 'https://example.com/asics-sky-elite2'
  },
  {
    name: 'Mizuno Wave Momentum',
    desc: 'Premium cushioning and lockdown fit.',
    url: 'https://example.com/mizuno-momentum'
  },
  {
    name: 'Nike React Hyperset',
    desc: 'Top-tier React foam for ultimate responsiveness.',
    url: 'https://example.com/nike-react'
  }
];

export default function ShoesPremium() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Premium Volleyball Shoes</h1>
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
