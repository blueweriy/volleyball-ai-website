// src/pages/Rules.jsx
import React from 'react';

export default function Rules() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">🏐 Volleyball Rules</h1>

      {/* Court & Equipment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Court & Equipment</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Court size:</strong> 18m × 9m, divided by a net at center.</li>
          <li><strong>Net height:</strong> Men 2.43m, Women 2.24m.</li>
          <li><strong>Ball:</strong> Circumference 65–67cm, weight 260–280g.</li>
        </ul>
      </section>

      {/* Teams & Positions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Teams & Positions</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Setter:</strong> Orchestrates the offense, delivers accurate sets.</li>
          <li><strong>Outside Hitter:</strong> Main attacker from the left side.</li>
          <li><strong>Opposite Hitter:</strong> Attacks from the right side and blocks.</li>
          <li><strong>Middle Blocker:</strong> Quick front-row attacks and blocks.</li>
          <li><strong>Libero:</strong> Defensive specialist in the back row; cannot attack above net height.</li>
        </ul>
      </section>

      {/* Scoring */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Scoring</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Rally Point System:</strong> Every rally results in a point for the winning team.</li>
          <li><strong>Match Format:</strong> Best of 5 sets. Sets 1–4 to 25 points, 5th set to 15 points.</li>
          <li><strong>Win by 2:</strong> A team must win by at least 2 points.</li>
        </ul>
      </section>

      {/* Basic Play */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Basic Play</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Three Contacts:</strong> A team may touch the ball up to three times before returning it.</li>
          <li><strong>No Double Hit:</strong> The same player may not touch the ball twice in succession.</li>
          <li><strong>Ball In/Out:</strong> The ball is out if it lands outside the court boundaries.</li>
          <li><strong>Net Touch:</strong> Players may not touch the net or cross under it during play.</li>
        </ul>
      </section>

      {/* Serving & Rotation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Serving & Rotation</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Serve:</strong> Must be executed from behind the end line.</li>
          <li><strong>Rotation:</strong> Teams rotate clockwise each time they win the serve.</li>
          <li><strong>Foot Fault:</strong> Server must not step on or over the end line before contacting the ball.</li>
        </ul>
      </section>

      {/* Common Violations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Common Violations</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Four Contacts:</strong> Exceeding three team contacts.</li>
          <li><strong>Carry:</strong> Holding or throwing the ball instead of making a clean hit.</li>
          <li><strong>Block Fault:</strong> Improper reach over the net or touching the net.</li>
          <li><strong>Back-Row Attack:</strong> Back-row player attacks above net height from front zone.</li>
        </ul>
      </section>

      {/* Quick Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Quick Tips</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Communicate clearly: call “Mine!” or “Yours!” to avoid collisions.</li>
          <li>Maintain a low, balanced stance—knees bent, weight forward.</li>
          <li>Create a solid passing platform by locking arms together.</li>
          <li>Watch the opponent’s shoulders for block timing.</li>
        </ul>
      </section>
    </div>
  );
}
