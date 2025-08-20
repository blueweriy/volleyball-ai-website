import React from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function BudgetVolleyballs() {
  const items = [
    {
      name: "Franklin Sports PVC Training Ball",
      desc: "Durable PVC cover for frequent practice and outdoor use. Great for beginners and team drills.",
      tags: ["PVC cover", "Indoor/Outdoor", "Beginner-friendly"],
      url: "https://www.amazon.com/dp/B07KX7BZ2T",
      category: "Budget",
    },
    {
      name: "Molten Recreational Volleyball",
      desc: "Soft synthetic cover that reduces sting—nice for passing drills and casual games.",
      tags: ["Soft-touch feel", "Lightweight", "Recreation/Practice"],
      url: "https://www.amazon.com/dp/B00HY4FZ2E",
      category: "Budget",
    },
    {
      name: "Tachikara Sensi-Touch Training Ball",
      desc: "Budget-friendly with a comfortable touch. Solid option for setting and ball control work.",
      tags: ["Sensi-Touch feel", "Good control", "Training focused"],
      url: "https://www.amazon.com/dp/B000A7Q1I0",
      category: "Budget",
    },
  ];

  return (
    <div className="px-6 sm:px-10 lg:px-20 py-12 max-w-6xl mx-auto text-gray-900">
      <h1 className="text-3xl font-bold mb-3">Budget Volleyballs</h1>
      <p className="text-lg mb-8 text-gray-600">
        Affordable, reliable options for drills, team practices, and casual play. 
        These prioritize durability and comfort without breaking the bank.
      </p>

      <ul className="space-y-8">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-white"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <span className="text-sm text-gray-500">{item.category}</span>
            </div>
            <p className="mt-2 text-gray-700">{item.desc}</p>

            <ul className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((tag, i) => (
                <li
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              View on Amazon <ExternalLink size={16} />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          to="/purchases"
          className="text-blue-600 underline hover:text-blue-800"
        >
          ← Back to Purchases
        </Link>
      </div>
    </div>
  );
}
