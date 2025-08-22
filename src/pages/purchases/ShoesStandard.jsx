// src/pages/purchases/ShoesStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Mizuno Wave Stealth Neo 2',
    desc: 'Updated traction outsole and cushioning, often ~$130–$150.',
    url: 'https://www.amazon.com/Mizuno-Momentum-Volleyball-Shoe-Men/dp/B07GXVRTD3'
  },
  {
    name: 'Mizuno Wave Momentum 3',
    desc: 'Balanced cushioning trainer, listed around $160.',
    url: 'https://www.amazon.com/Mizuno-Unisex-Volleyball-Shoes-Momentum/dp/B0DY8TX5T5'
  },
  {
    name: 'ASICS Sky Elite FF',
    desc: 'High-performance court shoe with FlyteFoam, around $140–$160.',
    url: 'https://www.amazon.com/ASICS-Sky-Elite-FF-Volleyball/dp/B08CB78GN1'
  }
];


export default function ShoesStandard() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <h1 className="text-3xl font-bold mb-6">Standard Volleyball Shoes</h1>
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
