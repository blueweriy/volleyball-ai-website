// src/pages/purchases/NetsBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Franklin Sports Volleyball Set – Beach & Backyard',
    desc: 'Recreational portable set with poles, net, stakes, and ball—good entry-level choice for casual play.',
    url: 'https://www.amazon.com/Franklin-Sports-50402-Parent-Volleyball-Set/dp/B00O7EROVS'
  },
  {
    name: 'EastPoint Sports Deluxe Volleyball/Badminton Combo Set',
    desc: 'Adjustable-height net for volleyball or badminton; solid value for backyard use with quick assembly.',
    url: 'https://www.amazon.com/EastPoint-Sports-Deluxe-Volleyball-Badminton/dp/B01FWO60HU'
  },
  {
    name: 'Amazon Basics Outdoor Volleyball & Badminton Combo Set',
    desc: 'All-in-one budget set with net, poles, ball, and carry bag—simple and affordable for family games.',
    url: 'https://www.amazon.com/AmazonBasics-Volleyball-Badminton-Combo-Set/dp/B07GXS216T'
  }
];

export default function NetsBudget() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Nets</h1>

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
