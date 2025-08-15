// src/pages/purchases/Cones.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'FGBNM Training Cones',
    desc: 'Bright, stackable cones for agility drills.',
    url: 'https://www.amazon.com/FGBNM-Training-Football-Basketball-Equipment/dp/B0CPLCVK6N/ref=zg_bs_g_3394981_d_sccl_1/143-1074064-2764467?th=1'
  },
  {
    name: 'GHB Agility Cones',
    desc: 'Low-profile, hex-shaped for stability on turf.',
    url: 'https://www.amazon.com/GHB-Training-Football-Basketball-Equipment/dp/B0CLNGGXBC/ref=zg_bs_g_3394981_d_sccl_4/143-1074064-2764467?th=1'
  },
  {
    name: 'ProMidas Speed Training Cones (24-pack)',
    desc: 'Versatile set for footwork, marking boundaries.',
    url: 'https://www.amazon.com/Soccer-Cones-Training-Basketball-Avalaible/dp/B0C2LZYXXT/ref=zg_bs_g_3394981_d_sccl_5/143-1074064-2764467?th=1'
  }
];

export default function Cones() {
  return (
    <div style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
      <div className="py-16 px-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Training Cones</h1>
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
    </div>
  );
}
