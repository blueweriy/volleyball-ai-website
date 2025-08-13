// src/pages/Purchases.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const gearData = [
  {
    category: "Volleyball Nets",
    items: [
      { label: "Budget Net",    to: "/purchases/nets/budget",    desc: "Affordable net for casual play." },
      { label: "Standard Net",  to: "/purchases/nets/standard",  desc: "Reliable net for regular indoor/outdoor use." },
      { label: "Premium Net",   to: "/purchases/nets/premium",   desc: "Heavy-duty, weatherproof net for competitive play." },
    ],
  },
  {
    category: "Volleyball Shoes",
    items: [
      { label: "Budget Shoes",    to: "/purchases/shoes/budget",    desc: "Basic grip and cushioning for beginners." },
      { label: "Standard Shoes",  to: "/purchases/shoes/standard",  desc: "Balanced support and lightweight design." },
      { label: "Premium Shoes",   to: "/purchases/shoes/premium",   desc: "Top-tier responsiveness and stability." },
    ],
  },
  {
    category: "Volleyballs",
    items: [
      { label: "Budget Ball",    to: "/purchases/balls/budget",    desc: "Durable training ball for practice." },
      { label: "Standard Ball",  to: "/purchases/balls/standard",  desc: "Official weight and feel for matches." },
      { label: "Premium Ball",   to: "/purchases/balls/premium",   desc: "Professional-grade ball with extra durability." },
    ],
  },
  {
    category: "Accessories & Gear",
    items: [
      { label: "Knee Pads",     to: "/purchases/accessories/knee-pads",    desc: "Essential protection for diving drills." },
      { label: "Ankle Braces",  to: "/purchases/accessories/ankle-braces", desc: "Support and stability to prevent sprains." },
      { label: "Training Cones",to: "/purchases/accessories/cones",        desc: "Mark drills and footwork patterns." },
    ],
  },
];

export default function Purchases() {
  return (
    <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div className="bg-white text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-serif font-bold mb-6 text-center">
            Recommended Purchases
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Gear up with top-rated equipment—categorized and ranked to suit every budget and performance level.
          </p>

          {gearData.map(section => (
            <section key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.items.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow no-underline"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    <span className="mt-4 inline-block text-blue-600 underline font-medium">
                      View {item.label} →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
