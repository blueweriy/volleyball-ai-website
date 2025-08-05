// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans">

      {/* Hero Section styled like Apple promo */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x900/?volleyball-court"
          alt="Volleyball Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="bg-blue-600 text-white text-5xl font-bold px-8 py-4 rounded-3xl text-center">
            Elevate Your Game
          </div>
          <div className="mt-4 bg-white text-black text-xl px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
            Get Started
          </div>
        </div>
      </section>
    </div>
  );
}
