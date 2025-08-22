import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "ASICS Men's Sky Elite FF 3 Volleyball Shoes",
    desc: "Explosive jump feel with FlyteFoam and locked-down midfoot — competition-ready.",
    url: "https://www.amazon.com/ASICS-Mens-Sky-Elite-Sneaker/dp/B0DT32BB1H"
  },
  {
    name: "Nike Air Zoom HyperAce 2 SE Men's Volleyball Shoes",
    desc: "Zoom Air cushioning with supportive cage — durable for hard-court play.",
    url: "https://www.amazon.com/Nike-HyperAce-Volleyball-DM8199-064-Multi-Color/dp/B0BHQR96GF"
  },
  {
    name: "Mizuno Women's Wave Momentum 3 Volleyball Shoe",
    desc: "Premium cushioning and stability; many colorways price in the premium tier.",
    url: "https://www.amazon.com/Mizuno-Womens-Wave-Momentum-Volleyball/dp/B0CPHCQD3Y"
  }
];

export default function ShoesPremium() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-3xl font-bold mb-6">Premium Volleyball Shoes ($180+)</h1>
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
