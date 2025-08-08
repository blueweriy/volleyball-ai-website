// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546554137-f86b9593a04f?auto=format&fit=crop&w=1350')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Elevate Your Volleyball Game
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8">
            Tailored workouts, pro tips, and gear recommendations—everything you need to dominate the court.
          </p>
          <div className="space-x-4">
            <Link
              to="/workout"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Get Started
            </Link>
            <Link
              to="/purchases"
              className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition"
            >
              Shop Gear
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow">
            <img src="https://img.icons8.com/ios-filled/100/000000/dumbbell.png" alt="Workouts" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Workouts</h3>
            <p className="text-gray-700">
              Programs built by experts—plyometrics, strength, stamina, and injury prevention.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow">
            <img src="https://img.icons8.com/ios-filled/100/000000/volleyball--v1.png" alt="Skills" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skill Drills</h3>
            <p className="text-gray-700">
              Serve, set, spike, dig, and receive drills to sharpen your technique and reaction.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow">
            <img src="https://img.icons8.com/ios-filled/100/000000/shopping-cart-loaded.png" alt="Gear" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Top-Rated Gear</h3>
            <p className="text-gray-700">
              Hand-picked nets, shoes, balls, and accessories—budget to pro-level recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Callouts Section */}
      <section className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Up Your Game?</h2>
          <p className="mb-8">
            Join our community, track your progress, and take your skills to the next level.
          </p>
          <Link
            to="/workout"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Start Your Journey
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
