// src/pages/purchases/BallsBudget.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function BallsBudget() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Budget Volleyballs</h1>
      <p className="mb-6">
        Durable training balls—ideal for practice and drills.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
