// src/pages/purchases/NetsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Park & Sun Tournament Flex 1000 Volleyball Set',
    desc: 'Portable and sturdy, typically priced around $189.99—great mid-range choice for outdoor courts.',
    url: 'https://www.dickssportinggoods.com/p/park-sun-sports-tournament-flex-1000-volleyball-set-16pssuspctrmflx/16pssuspctrmflx'
  },
  {
    name: 'TrainingNets® PowerNet Portable Volleyball Warm-Up Net',
    desc: 'Freestanding frame, adjustable to regulation height, priced $129.99–$189.99 depending on width.',
    url: 'https://www.trainingnets.com/products/powernet-freestanding-volleyball-warm-up-net'
  },
  {
    name: 'Park & Sun Sports BC-400 Professional Outdoor Net',
    desc: 'Pro-grade regulation net with steel cable and fiberglass dowels, usually $164.99 after discount.',
    url: 'https://www.parksun.com/Volleyball/Nets/bc-400-professional-volleyball-net.php'
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
              View on Store →
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
