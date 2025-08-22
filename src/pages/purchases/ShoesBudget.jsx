import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "ASICS Men's Upcourt 5 Volleyball Shoes",
    desc: "Budget indoor court shoe with GEL cushioning and supportive overlays — solid entry pick.",
    url: "https://www.amazon.com/ASICS-Mens-Upcourt-5-Volleyball/dp/B0CK5CVY3W?th=1"
  },
  {
    name: "ASICS Men's Gel-Rocket 12 Volleyball Shoes",
    desc: "Reliable traction and cushioning; a classic budget-friendly volleyball model.",
    url: "https://www.amazon.com/ASICS-Mens-Gel-Rocket-Volleyball-Shoes/dp/B0F9JFVD8J"
  },
  {
    name: "Mizuno Women's Cyclone Speed 3 Volleyball Shoe",
    desc: "Lightweight and stable for indoor play (youth and women’s sizing commonly under $100).",
    url: "https://www.amazon.com/Mizuno-Womens-Cyclone-Speed-Volleyball/dp/B09KPF5XPN"
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
