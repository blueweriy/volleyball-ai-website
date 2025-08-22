import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Spalding Competition Outdoor Volleyball Net',
    desc: 'Regulation-size outdoor volleyball net—durable and easy to install.',
    url: 'https://www.spalding.com/volleyball/volleyball-nets/'  // Official Spalding site listing volleyball nets :contentReference[oaicite:1]{index=1}
  },
  {
    name: 'Park & Sun Sports Spectrum Classic Net System',
    desc: 'Portable and adjustable net system great for grass or sand play.',
    url: 'https://www.panelsun.com/Net-Systems/Volleyball/sport-volleyball-sets.html'  // Park & Sun Sports page on sport-level nets :contentReference[oaicite:2]{index=2}
  },
  {
    name: 'Spalding/AAI Aramid Fiber 1M Net Package',
    desc: 'High-end performance net built to regulation height for competitive play.',
    url: 'https://www.bsnsports.com/p/spaldingaai-aramid-fiber-1m-net-package/'  // BSN Sports listing for a regulation competition net :contentReference[oaicite:3]{index=3}
  }
];

export default function NetsBudget() {
  return (
    <div className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Nets</h1>
      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name} className="bg-gray-50 p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 underline"
            >
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
