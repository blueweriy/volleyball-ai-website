// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Top Bar styled like Samsung */}
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="text-2xl font-bold">vaw</div>
        <nav className="space-x-8 text-sm">
          {['Home','Rules','Callouts','Skills','Analysis','Workouts','Purchases'].map(label => (
            <Link
              key={label}
              to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              className="hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-gray-600">Support | Business</div>
      </header>

      {/* Hero Section with full-width image and overlay */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://source.unsplash.com/random/1600x900?volleyball"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-16">
          <h1 className="text-6xl font-extrabold text-white mb-4">vaw</h1>
          <p className="text-2xl text-white mb-6 max-w-lg">
            Elevate your volleyball game with AI-powered insights.
          </p>
          <Link
            to="/analysis"
            className="bg-white text-black px-6 py-3 rounded-full font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
