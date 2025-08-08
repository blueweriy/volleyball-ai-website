import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'ASICS Gel-Knee Pad',
    desc: 'Gel cushioning plus neoprene sleeve for comfort.',
    url: 'https://example.com/asics-gel-kneepad'
  },
  {
    name: 'Nike Essentials Knee Sleeve',
    desc: 'Compression support and lightweight fabric.',
    url: 'https://example.com/nike-kneesleeve'
  },
  {
    name: 'Mizuno Strike Knee Pads',
    desc: 'Contoured EVA padding for impact protection.',
    url: 'https://example.com/mizuno-strike'
  }
];

export default function KneePads() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Knee Pads</h1>
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
