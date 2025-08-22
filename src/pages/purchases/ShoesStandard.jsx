import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Mizuno Wave Lightning Z6",
    desc: "Fast, lightweight, and responsive volleyball shoe. Available for men and women, typically around $120–$150.",
    url: "https://www.amazon.com/Mizuno-Wave-Lightning-Volleyball-Shoe/dp/B07XMN46K1"
  },
  {
    name: "adidas Crazyflight",
    desc: "BOOST midsole for energy return, with great traction and lightweight design. Sold in unisex models (men’s/women’s).",
    url: "https://www.amazon.com/adidas-Crazyflight-Volleyball-Sneakers/dp/B0D8W27L61"
  },
  {
    name: "Mizuno Wave Momentum 3",
    desc: "Cushioned and stable volleyball shoe for intense play — available in men’s and women’s versions.",
    url: "https://www.amazon.com/Mizuno-Wave-Momentum-Volleyball-Shoe/dp/B0CPGXLPPG"
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
          <li key={it.name}>
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-1 text-gray-700">{it.desc}</p>
            <a href={it.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 hover:underline">
              View on Amazon →
            </a>
          </li>
        ))}
      </ul>
      <Link to="/purchases" className="mt-8 inline-block text-blue-600 hover:underline">← Back to Purchases</Link>
    </div>
  );
}
