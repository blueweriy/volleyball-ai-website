import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Spalding Backyard Volleyball Net (Portable Set)',
    desc: 'Regulation-size, portable net—great for casual play and easy setup.',
    url: 'https://www.amazon.com/spalding-volleyball-net/s?k=spalding+volleyball+net'
  },
  {
    name: 'Park & Sun Spectrum Classic Outdoor Volleyball Net System',
    desc: 'High-quality, professional outdoor net with adjustable heights and boundary.',
    url: 'https://www.dickssportinggoods.com/p/park-sun-spectrum-classic-volleyball-net-system-16pssuspctrmclsscstg/16pssuspctrmclsscstg'
  },
  {
    name: 'Spalding Elite Aluminum Volleyball System',
    desc: 'Heavy-duty, durable system that meets NCAA/NFHS standards—built to last.',
    url: 'https://www.bsnsports.com/p/spalding-elite-aluminum-volleyball-system/'
  }
];

export default function NetsBudget() {
  return (
    <div
      className="py-16 bg-white text-gray-900 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Nets</h1>
      <ul className="space-y-6">
        {items.map((it) => (
          <li key={it.name} className="bg-gray-50 p-6 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              View on Store →
            </a>
          </li>
        ))}
      </ul>
      <Link to="/purchases" className="mt-10 inline-block text-blue-600 hover:underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
