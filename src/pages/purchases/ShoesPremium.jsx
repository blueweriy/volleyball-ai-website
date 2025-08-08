// src/pages/purchases/ShoesPremium.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoesPremium() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Premium Volleyball Shoes</h1>
      <p className="mb-6">
        Top-tier responsiveness, stability, and durability for serious athletes.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
