// src/pages/purchases/ShoesStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Mizuno Wave Lightning Z6',
    desc: 'Lightweight, responsive court shoe with excellent traction and balance.',
    url: 'https://www.amazon.com/Mizuno-Mens-Wave-Lightning-Volleyball-Shoe/dp/B07XMN46K1'
  },
  {
    name: 'ASICS Sky Elite FF 3',
    desc: 'Mid-level volleyball shoe with FlyteFoam cushioning and stable midsole support.',
    url: 'https://www.amazon.com/ASICS-Womens-Elite-FlyteFoam-Volleyball/dp/B0D3FND8DG?psc=1'
  },
  {
    name: 'Nike Zoom HyperAce 2',
    desc: 'Court-focused shoe featuring Zoom Air cushioning and durable TPU support cage.',
    url: 'https://www.amazon.com/Nike-Womens-HyperAce-Volleyball-Shoes/dp/B07C54TH5Z'
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
