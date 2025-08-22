// src/pages/purchases/NetsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Tachikara Professional Volleyball Net',
    desc: 'Regulation size indoor/outdoor net with durable twisted braided nylon cord and reinforced top cable.',
    url: 'https://www.amazon.com/Tachikara-Competition-Volleyball-Net/dp/B0000AS7W8'
  },
  {
    name: 'Mikasa Competition Volleyball Net',
    desc: 'Heavy-duty, vinyl-coated steel cable with UV-resistant mesh; ideal for school or club competitions.',
    url: 'https://www.amazon.com/Mikasa-VBN-2-Competition-Volleyball-Net/dp/B0007VHYXO'
  },
  {
    name: 'Champion Sports Tournament Power Volleyball Net',
    desc: 'Official size with rip-resistant 3 mm polyethylene mesh, reinforced vinyl headband, and side pockets.',
    url: 'https://www.amazon.com/Champion-Sports-Tournament-Volleyball-Nylon/dp/B0007VHV3K'
  }
];

export default function NetsStandard() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
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
