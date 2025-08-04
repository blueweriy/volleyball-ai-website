// src/pages/Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { title: 'Serve',     to: '/skills/serve',   description: 'Learn different serve techniques.' },
  { title: 'Spiking',   to: '/skills/spike',   description: 'Analyze your spiking form.' },
  { title: 'Setting',   to: '/skills/set',     description: 'Master setting mechanics.' },
  { title: 'Receiving', to: '/skills/receive', description: 'Develop your passing platform.' },
  { title: 'Blocking',  to: '/skills/block',   description: 'Improve your block timing.' },
  { title: 'Digging',   to: '/skills/dig',     description: 'Hone your defensive digs.' },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">🏐 Volleyball Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ title, to, description }) => (
          <Link
            key={title}
            to={to}
            className="block bg-gray-800 hover:bg-yellow-400 hover:text-black transition p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
