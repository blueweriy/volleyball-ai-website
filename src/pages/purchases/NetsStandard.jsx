// src/pages/purchases/NetsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NetsStandard() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Standard Volleyball Nets</h1>
      <p className="mb-6">
        Reliable indoor/outdoor nets with official dimensions and decent durability.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
