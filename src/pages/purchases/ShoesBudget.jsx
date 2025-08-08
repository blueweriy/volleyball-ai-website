// src/pages/purchases/ShoesBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoesBudget() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Budget Volleyball Shoes</h1>
      <p className="mb-6">
        Basic grip and cushioning—perfect if you’re just starting out.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
