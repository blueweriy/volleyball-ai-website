import React from "react";
import { Link } from "react-router-dom";

export default function Accessories() {
  const items = [
    { label: "Knee Pads", to: "/purchases/accessories/knee-pads", desc: "Impact protection for digs and dives." },
    { label: "Ankle Braces", to: "/purchases/accessories/ankle-braces", desc: "Support and stability for cuts/jumps." },
    { label: "Training Cones", to: "/purchases/accessories/cones", desc: "Mark drills and court movement patterns." },
  ];

  return (
    <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-6 text-center">Accessories & Gear</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Small upgrades that make a big difference in comfort and consistency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((i) => (
            <Link key={i.to} to={i.to} className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow no-underline">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{i.label}</h2>
              <p className="text-gray-800 leading-relaxed">{i.desc}</p>
              <span className="mt-4 inline-block text-gray-900 font-medium">View →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
