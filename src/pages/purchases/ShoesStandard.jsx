// src/pages/purchases/ShoesStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Mizuno Wave Lightning Z6',
    desc: 'Lightweight, responsive court shoe with excellent traction—ideal for quick movements.',
    url: 'https://www.amazon.com/Mizuno-Mens-Wave-Lightning-Volleyball-Shoe/dp/B07XMN46K1'
  },
  {
    name: 'ASICS Men's Upcourt 5 Volleyball Shoes',
    desc: 'Budget-friendly court trainer featuring breathable mesh and supportive overlays, under $60.',
    url: 'https://www.amazon.com/ASICS-1071A086-Mens-Sneaker/dp/B0CK5CVY3W'
  },
  {
    name: 'Mizuno Wave Dimension Elite',
    desc: 'Balanced cushioning with Mizuno ENERZY and excellent stability for frequent court use.',
    url: 'https://www.amazon.com/Mizuno-Unisex-Adult-Momentum-Elite-Volleyball/dp/B0DY8TX5T5'
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
