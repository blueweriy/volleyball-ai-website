// src/pages/purchases/NetsPremium.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Champion Sports Tournament Series Volleyball Set',
    desc: 'Durable powder-coated aluminum poles, high-quality mesh net, includes premium volleyball and boundary lines—perfect mid-high tier set.',
    url: 'https://www.athleticstuff.com/champion-sports-tournament-series-volleyball-set/?srsltid=AfmBOoqUWj6Xwf7x-4qwBAm5XBetdEp9RTUmnDR4_uwAzYwQsYBTNVxm'
  },
  {
    name: 'SpikePro Elite Outdoor Volleyball Net System',
    desc: 'Telescoping 14-ga aluminum poles with net height options and upgraded 3 mm knotless net—built for frequent outdoor use.',
    url: 'https://www.gophersport.com/spikepro-elite-outdoor-volleyball-net-system'
  },
  {
    name: 'Baden Champions Series Volleyball Set',
    desc: 'Pro-grade powder-coated steel posts, regulation net, boundary lines and premium volleyball—all in a heavy-duty carry bag.',
    url: 'https://www.athleticstuff.com/baden-sports-champions-series-volleyball-set/?srsltid=AfmBOooRe4MH7j45A0h-k_nvxD-ZaiGB5yi39E57pb6pTx1dNZ5iOGf_'
  }
];

export default function NetsPremium() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <h1 className="text-3xl font-bold mb-6">Premium Volleyball Nets (Under $1,000)</h1>
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
