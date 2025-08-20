// src/pages/purchases/BallsBudget.jsx
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Franklin Sports PVC Training Ball",
    desc:
      "Durable PVC cover for frequent practice and outdoor use. Great for beginners and team drills.",
    highlights: ["PVC cover", "Indoor/Outdoor", "Beginner-friendly"],
    url: "https://www.amazon.com/Franklin-Sports-Mystic-Volleyball-Synthetic/dp/B07XNSXRBX",
  },
  {
    name: "Molten Recreational Volleyball",
    desc:
      "Soft synthetic cover that reduces sting—nice for passing drills and casual games.",
    highlights: ["Soft-touch feel", "Lightweight", "Recreation/Practice"],
    url: "https://www.amazon.com/Molten-Stars-Stripes-Recreational-Volleyball/dp/B00JMB3FLY",
  },
  {
    name: "Tachikara Sensi-Touch Training Ball",
    desc:
      "Budget-friendly with a comfortable touch. Solid option for setting and ball control work.",
    highlights: ["Sensi-Touch feel", "Good control", "Training focused"],
    url: "https://www.amazon.com/Tachikara-VX2-Solid-Spark-Volleyball/dp/B0F3JV26CQ",
  },
];

export default function BallsBudget() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }} // guaranteed left/right spacing
    >
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold">Budget Volleyballs</h1>
        <p className="text-lg text-gray-700 mt-3">
          Affordable, reliable options for drills, team practices, and casual play.
          These prioritize durability and comfort without breaking the bank.
        </p>
      </header>

      {/* Cards */}
      <section className="max-w-5xl mx-auto">
        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <li
              key={it.name}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold leading-tight">{it.name}</h2>
                <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Budget
                </span>
              </div>

              <p className="mt-2 text-gray-700">{it.desc}</p>

              {/* Highlights */}
              {it.highlights?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {it.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={it.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-blue-700 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  View on Amazon
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                    <path d="M5 5h6V3H3v8h2V5z" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Back link */}
        <div className="mt-10">
          <Link
            to="/purchases"
            className="inline-block text-blue-600 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            ← Back to Purchases
          </Link>
        </div>
      </section>
    </div>
  );
}
