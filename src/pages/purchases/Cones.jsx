// src/pages/purchases/Cones.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Cones() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Training Cones</h1>
      <p className="mb-6">
        Mark out drills, footwork patterns, and agility courses.
      </p>
      <Link to="/purchases" className="text-blue-600 underline">
        ← Back to Purchases
      </Link>
    </div>
  );
}
