// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Using Unsplash images for demo; swap these URLs with your own hosted assets if you like.
const heroImage =
  'https://images.unsplash.com/photo-1596495577886-0a1b38d5f3d6?auto=format&fit=crop&w=1350&q=80';

const skillImages = {
  serve:
    'https://images.unsplash.com/photo-1599040918102-e0c1a3b06798?auto=format&fit=crop&w=800&q=60',
  spike:
    'https://images.unsplash.com/photo-1599058917212-79b5e6f04536?auto=format&fit=crop&w=800&q=60',
  set:
    'https://images.unsplash.com/photo-1599007340065-5f84981f7b4a?auto=format&fit=crop&w=800&q=60',
  receive:
    'https://images.unsplash.com/photo-1599498933247-1fe8de7d65e2?auto=format&fit=crop&w=800&q=60',
  block:
    'https://images.unsplash.com/photo-1599007339351-cb50b9c1921b?auto=format&fit=crop&w=800&q=60',
  dig:
    'https://images.unsplash.com/photo-1599495335675-8e46aeb2e4d9?auto=format&fit=crop&w=800&q=60',
};

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Volleyball action"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-center">
            Volleyball AI Coach
          </h1>
          <p className="text-lg max-w-2xl text-center mb-6">
            Elevate your volleyball skills with real-time video analysis,
            personalized drills, and expert coaching tips.
          </p>
          <Link
            to="/analysis"
            className="text-blue-400 hover:underline font-semibold"
          >
            Try Analysis Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About This Website</h2>
          <p className="text-lg leading-relaxed">
            Volleyball AI Coach is designed for beginner and club-level players
            who want to improve their game without needing a professional
            coach. Using the power of MediaPipe pose detection, our site
            analyzes your form in spikes, serves, sets, blocks, digs, and
            receptions—then gives you easy-to-follow feedback and drills to
            help you progress faster.
          </p>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-16 bg-gray-800 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Core Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillImages).map(([key, url]) => (
            <Link
              key={key}
              to={`/skills/${key}`}
              className="group block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
            >
              <div
                className="h-48 bg-center bg-cover"
                style={{ backgroundImage: `url(${url})` }}
              />
              <div className="bg-gray-900 p-4">
                <h3 className="text-xl font-semibold capitalize text-white">
                  {key}
                </h3>
                <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-200">
                  Click to explore {key} drills & analysis
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-8 text-center px-4">
        <p className="mb-4">Ready to take your volleyball to the next level?</p>
        <Link
          to="/analysis"
          className="text-blue-400 hover:underline font-semibold"
        >
          Upload Your First Video
        </Link>
      </footer>
    </div>
  );
}
