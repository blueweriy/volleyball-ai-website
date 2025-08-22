import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "ASICS Upcourt 5",
    desc: "Lightweight indoor court shoe with GEL cushioning — available in men’s and women’s sizing, under $100.",
    url: "https://www.amazon.com/ASICS-Upcourt-Volleyball-Shoe/dp/B0CK5CVY3W"
  },
  {
    name: "ASICS Gel-Rocket 12",
    desc: "Classic entry-level volleyball shoe with strong grip and support. Sold in both men’s and women’s versions.",
    url: "https://www.amazon.com/ASICS-Gel-Rocket-Volleyball-Shoes/dp/B0F9JFVD8J"
  },
  {
    name: "Mizuno Cyclone Speed 3",
    desc: "Affordable all-around volleyball trainer — versatile for beginners, with men’s and women’s sizes under $100.",
    url: "https://www.amazon.com/Mizuno-Cyclone-Speed-Volleyball-Shoe/dp/B09KPF5XPN"
  }
];

export default function ShoesBudget() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-3xl font-bold mb-6">Budget Volleyball Shoes (Under $100)</h1>
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
