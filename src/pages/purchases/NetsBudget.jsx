// src/pages/purchases/NetsBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NetsBudget() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Budget Volleyball Nets</h1>
      <p className="mb-6">
        Affordable nets suitable for casual play in backyards or community gyms.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
