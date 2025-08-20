// src/pages/purchases/BallsBudget.jsx
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Franklin Sports PVC Training Ball",
    desc: "A tough and durable PVC volleyball designed for beginners and casual play. Its weather-resistant cover makes it suitable for both indoor and outdoor practice.",
    url: "https://www.amazon.com/Franklin-Sports-Mystic-Volleyball-Synthetic/dp/B07XNSXRBX",
  },
  {
    name: "Molten Recreational Volleyball",
    desc: "Soft synthetic cover that reduces sting, perfect for recreational drills and beginner-level games. Lightweight and affordable, ideal for team practices.",
    url: "https://www.amazon.com/Molten-Stars-Stripes-Recreational-Volleyball/dp/B00JMB3FLY",
  },
  {
    name: "Tachikara Sensi-Touch Training Ball",
    desc: "Budget-friendly ball with Tachikara’s soft-touch feel. Great for setting, passing, and building fundamental skills while keeping cost low.",
    url: "https://www.amazon.com/Tachikara-VX2-Solid-Spark-Volleyball/dp/B0F3JV26CQ",
  },
];

export default function BallsBudget() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Budget Volleyballs</h1>
      <p className="text-lg mb-6">
        Looking for affordable volleyballs for practice or casual games? Here are
        reliable and budget-friendly options that balance quality and price,
        perfect for drills, recreational matches, and team training.
      </p>

      <ul className="space-y-6">
        {items.map((it) => (
          <li
            key={it.name}
            className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold">{it.name}</h2>
            <p className="mt-2 text-gray-700">{it.desc}</p>
            <a
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 underline"
            >
              View on Amazon →
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          to="/purchases"
          className="inline-block text-blue-600 underline hover:text-blue-800"
        >
          ← Back to Purchases
        </Link>
      </div>
    </div>
  );
}
