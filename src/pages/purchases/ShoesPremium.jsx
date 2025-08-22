import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "ASICS Sky Elite FF 3",
    desc: "Top-tier unisex volleyball shoe with FlyteFoam and strong midsole support — premium competition model.",
    url: "https://www.amazon.com/ASICS-Sky-Elite-Volleyball-Shoe/dp/B0DT32BB1H"
  },
  {
    name: "Nike Air Zoom HyperAce 2",
    desc: "Durable Zoom Air cushioning and supportive cage design. Widely used by advanced male and female athletes.",
    url: "https://www.amazon.com/Nike-HyperAce-Volleyball-DM8199-064-Multi-Color/dp/B0BHQR96GF"
  },
  {
    name: "Mizuno Wave Momentum 4 Elite",
    desc: "Newest Mizuno flagship shoe with maximum cushioning and support — designed for serious play, men’s & women’s.",
    url: "https://www.amazon.com/Mizuno-Wave-Momentum-Volleyball-Shoe/dp/B0CPHCQD3Y"
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
