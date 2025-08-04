// src/pages/Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { title: 'Serve', path: '/skills/serve', description: 'Learn different serve techniques with videos and tips.' },
  { title: 'Spiking', path: '/skills/spike', description: 'Analyze your spiking form and improve vertical jump.' },
  { title: 'Setting', path: '/skills/set', description: 'Master the art of accurate and consistent sets.' },
  { title: 'Receiving', path: '/skills/receive', description: 'Develop a solid passing platform and footwork.' },
  { title: 'Blocking', path: '/skills/block', description: 'Learn blocking footwork and timing strategies.' },
  { title: 'Digging', path: '/skills/dig', description: 'Improve defensive digs with form analysis.' },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">🏐 Volleyball Skills</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        Select a skill to explore tutorials, form analysis, and drills to help you improve.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ title, path, description }) => (
          <Link
            key={title}
            to={path}
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
