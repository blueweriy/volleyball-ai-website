import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Mizuno Men's Wave Lightning Z6 Volleyball Shoe",
    desc: "Fast, lightweight, and responsive — staple standard-tier pick.",
    url: "https://www.amazon.com/Mizuno-Mens-Wave-Lightning-Volleyball/dp/B07XMN46K1"
  },
  {
    name: "adidas Women's Crazyflight Volleyball Shoes",
    desc: "BOOST midsole for energy return and great grip for quick lateral moves.",
    url: "https://www.amazon.com/adidas-Womens-Crazyflight-Volleyball-Sneakers/dp/B0D8W27L61"
  },
  {
    name: "Mizuno Men's Wave Momentum 3 Volleyball Shoe",
    desc: "MIZUNO ENERZY cushioning with Wave stability — comfortable for long sessions.",
    url: "https://www.amazon.com/Mizuno-Mens-Wave-Momentum-Volleyball/dp/B0CPGXLPPG"
  }
];

export default function ShoesStandard() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-3xl font-bold mb-6">Standard Volleyball Shoes ($100–$180)</h1>
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
