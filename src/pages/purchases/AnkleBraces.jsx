// src/pages/purchases/AnkleBraces.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AnkleBraces() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Ankle Braces</h1>
      <p className="mb-6">
        Support and stability to prevent sprains during play.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
