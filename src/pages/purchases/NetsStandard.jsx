// src/pages/purchases/NetsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Park & Sun Tournament Flex 1000 Volleyball Set',
    desc: 'Portable regulation net system, often around $189–$199 on Amazon.',
    url: 'https://www.amazon.com/Park-Sun-Sports-Tournament-Flex/dp/B01N5EATBW'
  },
  {
    name: 'PowerNet Portable Volleyball Practice Net',
    desc: 'Adjustable regulation-size training net, typically $139–$159 on Amazon.',
    url: 'https://www.amazon.com/PowerNet-Portable-Volleyball-Equipment-Scrimmage/dp/B0DY2M1HBX'
  },
  {
    name: 'Park & Sun BC-400 Regulation Volleyball Net',
    desc: 'Pro-grade steel cable net; Amazon listings around $160–$180.',
    url: 'https://www.amazon.com/Sports-Regulation-Outdoor-Professional-Volleyball/dp/B0C1Z8FY9D'
  }
];

export default function NetsStandard() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <h1 className="text-3xl font-bold mb-6">Standard Volleyball Nets ($130 – $200)</h1>
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
