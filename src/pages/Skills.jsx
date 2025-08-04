// src/pages/Skills.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { title: 'Serve',     to: '/skills/serve',   img: '/images/serve.jpg' },
  { title: 'Spiking',   to: '/skills/spike',   img: '/images/spike.jpg' },
  { title: 'Setting',   to: '/skills/set',     img: '/images/set.jpg' },
  { title: 'Receiving', to: '/skills/receive', img: '/images/receive.jpg' },
  { title: 'Blocking',  to: '/skills/block',   img: '/images/block.jpg' },
  { title: 'Digging',   to: '/skills/dig',     img: '/images/dig.jpg' },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">🏐 Volleyball Skills</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        Select a skill to explore tutorials, form analysis, and drills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(({ title, to, img }) => (
          <Link
            key={title}
            to={to}
            className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-2xl"
          >
            <div className="h-40 bg-center bg-cover" style={{ backgroundImage: `url(${img})` }} />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-1">{title}</h2>
              <p className="text-sm text-gray-300 group-hover:text-gray-100">
                Click to go to the {title} drill & analysis page.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
