// src/pages/purchases/ShoesBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Adidas VL Court 3.0',
    desc: 'Stylish, cushioned sneaker-like court shoe—currently around $56 on Amazon.',
    url: 'https://www.amazon.com/adidas-VL-Court-Sneaker-White/dp/B07X9PBT5Q'
  },
  {
    name: 'Mizuno Wave Tornado 5',
    desc: 'Lightweight basic volleyball option under $100 with solid traction.',
    url: 'https://www.amazon.com/Mizuno-Unisex-Volleyball-Shoes-White/dp/B0DSVCQDQP'
  },
  {
    name: 'ASICS Gel-Rocket 12',
    desc: 'Reliable cushioning and traction, typically priced under $100.',
    url: 'https://www.amazon.com/ASICS-Gel-Rocket-12-Volleyball-Shoes/dp/B0CXZGJ38Q'
  }
];



export default function ShoesBudget() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Shoes</h1>

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
