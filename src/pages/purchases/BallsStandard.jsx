// src/pages/purchases/BallsStandard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function BallsStandard() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Standard Volleyballs</h1>
      <p className="mb-6">
        Official weight and feel—perfect for league matches.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
