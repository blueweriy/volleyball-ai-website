// src/pages/Purchases.jsx
import React from "react";
import { Link } from "react-router-dom";

// Expanded gearData with more categories, tiers, and additional options
const gearData = [
  {
    category: "Volleyball Nets",
    items: [
      { tier: "Budget", label: "Basic Net", to: "/purchases/nets/basic", desc: "Affordable net for casual backyard play." },
      { tier: "Standard", label: "All-Weather Net", to: "/purchases/nets/all-weather", desc: "Durable nylon net suitable for indoor and outdoor use." },
      { tier: "Premium", label: "Pro Competitive Net", to: "/purchases/nets/pro", desc: "Heavy-duty, tournament-grade net with reinforced cables." },
      { tier: "Elite", label: "Professional Indoor Net", to: "/purchases/nets/indoor-pro", desc: "FIVB-approved net for professional indoor matches." },
    ],
  },
  {
    category: "Volleyball Shoes",
    items: [
      { tier: "Budget", label: "Starter Shoes", to: "/purchases/shoes/starter", desc: "Basic traction and cushioning ideal for beginners." },
      { tier: "Standard", label: "Performance Shoes", to: "/purchases/shoes/performance", desc: "Lightweight design with balanced support and grip." },
      { tier: "Premium", label: "Advanced Elite Shoes", to: "/purchases/shoes/elite", desc: "Enhanced stability and responsive midsole tech." },
      { tier: "Pro", label: "Pro-Level Match Shoes", to: "/purchases/shoes/pro", desc: "Top-tier materials for maximum durability and court feel." },
    ],
  },
  {
    category: "Volleyballs",
    items: [
      { tier: "Budget", label: "Training Ball", to: "/purchases/balls/training", desc: "Durable practice ball for drills." },
      { tier: "Standard", label: "Match Ball", to: "/purchases/balls/match", desc: "Official weight and feel for league play." },
      { tier: "Premium", label: "Competition Ball", to: "/purchases/balls/competition", desc: "Enhanced grip and consistent flight path." },
      { tier: "Pro", label: "Ultimate Pro Ball", to: "/purchases/balls/pro", desc: "Professional-grade PU leather for tournaments." },
    ],
  },
  {
    category: "Protective Gear",
    items: [
      { tier: "Budget", label: "Basic Knee Pads", to: "/purchases/accessories/knee-pads/basic", desc: "Light cushioning for occasional dives." },
      { tier: "Standard", label: "Performance Knee Pads", to: "/purchases/accessories/knee-pads/performance", desc: "Enhanced foam for better impact absorption." },
      { tier: "Premium", label: "Pro Knee Pads", to: "/purchases/accessories/knee-pads/pro", desc: "Cut-resistant shell and high-density foam." },
      { tier: "Budget", label: "Ankle Braces", to: "/purchases/accessories/ankle-braces/basic", desc: "Supportive wrap for light stability." },
      { tier: "Premium", label: "Pro Ankle Braces", to: "/purchases/accessories/ankle-braces/pro", desc: "Dual-pull straps for maximum support." },
    ],
  },
  {
    category: "Training Equipment",
    items: [
      { tier: "Budget", label: "Training Cones", to: "/purchases/accessories/cones", desc: "Markers for footwork drills." },
      { tier: "Standard", label: "Resistance Bands", to: "/purchases/accessories/bands", desc: "Variable resistance for strength and rehab." },
      { tier: "Premium", label: "Agility Ladder", to: "/purchases/accessories/ladder", desc: "Durable ladder to refine foot speed." },
      { tier: "Premium", label: "Spike Trainer", to: "/purchases/accessories/spike-trainer", desc: "Rebounder net to practice setting and spiking." },
    ],
  },
  {
    category: "Apparel & Hydration",
    items: [
      { tier: "Budget", label: "Basic Jersey", to: "/purchases/apparel/jersey/basic", desc: "Moisture-wicking cotton blend." },
      { tier: "Standard", label: "Performance Jersey", to: "/purchases/apparel/jersey/performance", desc: "Breathable mesh for intense play." },
      { tier: "Premium", label: "Compression Shorts", to: "/purchases/apparel/compression-shorts", desc: "Muscle support to reduce fatigue." },
      { tier: "Standard", label: "Water Bottle", to: "/purchases/accessories/bottle", desc: "Insulated stainless steel bottle." },
      { tier: "Premium", label: "Hydration Pack", to: "/purchases/accessories/hydration-pack", desc: "Hands-free reservoir for on-court rehydration." },
    ],
  },
];

export default function Purchases() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Recommended Purchases
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        Gear up with top-rated equipment—sorted by category and tier to fit every budget and performance level.
      </p>

      {gearData.map((section) => (
        <section key={section.category} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {section.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.items.map((item, idx) => (
              <Link
                key={`${item.to}-${idx}`}
                to={item.to}
                className="block bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow no-underline"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.label}
                  </h3>
                  <span className="text-sm font-medium text-gray-500">
                    {item.tier}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-2">
                  {item.desc}
                </p>
                <span className="mt-4 inline-block text-blue-600 underline font-medium">
                  View {item.label} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
