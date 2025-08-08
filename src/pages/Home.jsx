// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596495577886-d920f1fbf3b9?auto=format&fit=crop&w=1350')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Elevate Your Volleyball Game
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Expert workouts, skill drills, and gear recommendations—all in one place.
          </p>
          <Link
            to="/workout"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
          >
            Start Training
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Custom Routines</h3>
              <p className="text-gray-700">
                Tailored strength, plyo, and stamina programs just for you.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Skill Drills</h3>
              <p className="text-gray-700">
                Sharpen serve, set, spike, dig, and receive techniques.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Top Gear</h3>
              <p className="text-gray-700">
                Hand-picked nets, shoes, balls, and accessories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Up Your Game?</h2>
          <p className="mb-8">
            Join our community, track your progress, and take your skills to the next level.
          </p>
          <Link
            to="/purchases"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition"
          >
            Shop Gear
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Volleyball AI Hub. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="hover:text-white text-sm">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
