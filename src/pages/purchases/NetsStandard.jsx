// src/pages/purchases/NetsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Tachikara Competition 32′ Indoor/Outdoor Net',
    desc: 'Regulation 32′ x 3′ net with PVC-coated steel cable — solid mid-range pick for school/club or backyard courts.',
    url: 'https://www.walmart.com/ip/Tachikara-Competition-32-Indoor-Outdoor-Volleyball-Net/17460519'
  },
  {
    name: 'Mikasa VBN-2 Competition Volleyball Net',
    desc: 'Polyethylene competition mesh with steel aircraft cable; weather-treated materials.',
    url: 'https://www.amazon.com/Mikasa-VBN-2-Competition-Volleyball-Net/dp/B00091PQPY'
  },
  {
    name: 'Champion Sports VN600 Tournament Power Net (3 mm)',
    desc: 'Official size, 3 mm knotless nylon with vinyl-coated steel top/bottom cables and side dowels.',
    url: 'https://www.athleticstuff.com/champion-sports-vn600-tournament-power-volleyball-net/'
  }
];

export default function NetsStandard() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <h1 className="text-3xl font-bold mb-6">Standard Volleyball Nets</h1>

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
