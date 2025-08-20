import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function BudgetVolleyballs() {
  const items = [
    {
      name: "Franklin Sports PVC Training Ball",
      desc: "Durable PVC cover for frequent practice and outdoor use. Great for beginners and team drills.",
      tags: ["PVC cover", "Indoor/Outdoor", "Beginner-friendly"],
      url: "https://www.amazon.com/",
      type: "Budget",
    },
    {
      name: "Molten Recreational Volleyball",
      desc: "Soft synthetic cover that reduces sting—nice for passing drills and casual games.",
      tags: ["Soft-touch feel", "Lightweight", "Recreation/Practice"],
      url: "https://www.amazon.com/",
      type: "Budget",
    },
    {
      name: "Tachikara Sensi-Touch Training Ball",
      desc: "Budget-friendly with a comfortable touch. Solid option for setting and ball control work.",
      tags: ["Sensi-Touch feel", "Good control", "Training focused"],
      url: "https://www.amazon.com/",
      type: "Budget",
    },
  ];

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16 max-w-5xl mx-auto bg-white text-gray-900">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">🏐 Budget Volleyballs</h1>
      <p className="text-lg text-gray-700 mb-10">
        Affordable, reliable options for drills, team practices, and casual play. 
        These prioritize <span className="font-semibold">durability</span> and 
        <span className="font-semibold"> comfort</span> without breaking the bank.
      </p>

      {/* Cards */}
      <div className="space-y-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition p-6 relative"
          >
            {/* Badge */}
            <span className="absolute top-3 right-4 text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">
              {item.type}
            </span>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>

            {/* Description */}
            <p className="text-gray-700 mb-4">{item.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {item.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              <ExternalLink size={18} />
              View on Amazon
            </a>
          </div>
        ))}
      </div>

      {/* Back Link */}
      <Link
        to="/purchases"
        className="mt-10 inline-block text-blue-600 hover:underline"
      >
        ← Back to Purchases
      </Link>
    </div>
  );
}
