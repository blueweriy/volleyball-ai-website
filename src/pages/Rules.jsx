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
          <li><strong>Court size:</strong> 18 m × 9 m, divided by a net at center.</li>
          <li><strong>Net height:</strong> Men 2.43 m, Women 2.24 m.</li>
          <li><strong>Ball:</strong> Spherical, circumference 65–67 cm, weight 260–280 g.</li>
        </ul>
      </section>

      {/* Teams & Positions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Teams & Positions</h2>
        <p className="mb-2">Each team has 6 players on court:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Setter:</strong> Orchestrates the offense, delivers accurate sets.</li>
          <li><strong>Outside Hitter:</strong> Main attacker from the left side.</li>
          <li><strong>Opposite Hitter:</strong> Attacks from the right side, blocks.</li>
          <li><strong>Middle Blocker:</strong> Front-row blocker and quick attacker.</li>
          <li><strong>Libero:</strong> Defensive specialist in back row, cannot attack above net height.</li>
          <li><strong>Defensive Specialist:</strong> Similar to libero but fewer restrictions.</li>
        </ul>
      </section>

      {/* Scoring */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Scoring</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Rally-Point System:</strong> Every rally yields a point to the winner.</li>
          <li><strong>Match Format:</strong> Best of 5 sets. First 4 sets to 25 points, 5th set to 15.</li>
          <li><strong>Win by 2:</strong> Must lead by 2 points to win a set.</li>
        </ul>
      </section>

      {/* Basic Play */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Basic Play</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Maximum 3 Contacts:</strong> A team may touch the ball up to three times to return it over the net.</li>
          <li><strong>No Double Hit:</strong> A player may not contact the ball twice in succession.</li>
          <li><strong>Ball In/Out:</strong> Ball is out if it lands outside the court or touches an object.</li>
          <li><strong>Net Touch:</strong> Players may not touch the net or cross under it.</li>
        </ul>
      </section>

      {/* Serving & Rotation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Serving & Rotation</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Serve:</strong> From behind end line; can be underhand or overhand.</li>
          <li><strong>Service Order:</strong> Teams rotate clockwise each time they win serve.</li>
          <li><strong>Foot Fault:</strong> Server must not step on or over the end line until after contact.</li>
        </ul>
      </section>

      {/* Common Violations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Common Violations</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Four Contacts:</strong> Exceeding three touches.</li>
          <li><strong>Lift/Carry:</strong> Ball held or thrown instead of clean contact.</li>
          <li><strong>Block Fault:</strong> Reaching over net improperly or touching net.</li>
          <li><strong>Back-Row Attack:</strong> Back-row player may not attack in front zone above net height.</li>
        </ul>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Quick Tips</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Communicate loudly: call “Mine!” or “Yours!” to avoid collisions.</li>
          <li>Maintain a low, balanced stance—knees bent, weight forward.</li>
          <li>Focus on clean platform (arms locked) when passing.</li>
          <li>Watch opponent’s shoulder for block timing.</li>
        </ul>
      </section>
    </div>
  );
}
