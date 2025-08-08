// src/pages/purchases/KneePads.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function KneePads() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Knee Pads</h1>
      <p className="mb-6">
        Essential protection to keep your knees safe during dives and slides.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
