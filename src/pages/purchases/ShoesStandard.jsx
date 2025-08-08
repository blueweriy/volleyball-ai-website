// src/pages/purchases/ShoesStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoesStandard() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Standard Volleyball Shoes</h1>
      <p className="mb-6">
        A balance of support and lightweight design for regular training.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
