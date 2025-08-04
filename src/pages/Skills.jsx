// src/pages/Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { title: 'Serve',     to: '/skills/serve' },
  { title: 'Spiking',   to: '/skills/spike' },
  { title: 'Setting',   to: '/skills/set' },
  { title: 'Receiving', to: '/skills/receive' },
  { title: 'Blocking',  to: '/skills/block' },
  { title: 'Digging',   to: '/skills/dig' },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">🏐 Volleyball Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ title, to }) => (
          <Link
            key={title}
            to={to}
            className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
