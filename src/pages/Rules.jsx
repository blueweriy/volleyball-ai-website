// src/pages/Rules.jsx
import React from "react";

export default function Rules() {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
      {/* Enable smooth scrolling via CSS */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">Volleyball Rules</h1>

      {/* Table of Contents */}
      <nav className="mb-12 border-b pb-4">
        <h2 className="text-2xl font-semibold mb-2">Contents</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="#how-to-play" className="text-blue-600 hover:underline">How to Play</a></li>
          <li><a href="#court-dimensions" className="text-blue-600 hover:underline">Court Dimensions</a></li>
          <li><a href="#basic-rules" className="text-blue-600 hover:underline">Basic Rules</a></li>
          <li><a href="#rule-violations" className="text-blue-600 hover:underline">Rule Violations</a></li>
          <li><a href="#scoring" className="text-blue-600 hover:underline">Scoring System</a></li>
          <li><a href="#game-formats" className="text-blue-600 hover:underline">Game Formats</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="how-to-play" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">How to Play</h2>
        <p className="mb-4">
          Volleyball is played by two teams of six players each on a rectangular court divided by a net.
          The goal is to send the ball over the net and ground it on the opponent’s court, while preventing
          the same effort by the other team.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Each team has up to three touches to return the ball over the net.</li>
          <li>Players rotate clockwise each time they win the serve back from the opponent.</li>
          <li>Matches are typically best-of-five sets; the first four sets go to 25 points, the fifth to 15.</li>
        </ul>
      </section>

      <section id="court-dimensions" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Court Dimensions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Court size: 18 m long × 9 m wide (59 ft × 29½ ft).</li>
          <li>Attack line (3 m from the net) separates front‐row and back‐row play.</li>
          <li>Net height: 2.43 m for men’s, 2.24 m for women’s competitions.</li>
        </ul>
      </section>

      <section id="basic-rules" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Basic Rules</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>The ball may touch any part of the body, but a player must not hold or throw it.</li>
          <li>A block touch counts as one of the team’s three allowable contacts.</li>
          <li>Players may not touch the net or cross under it during play.</li>
        </ul>
      </section>

      <section id="rule-violations" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Rule Violations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Double contact:</strong> a player contacts the ball twice in succession.</li>
          <li><strong>Four hits:</strong> the team makes more than three contacts before returning.</li>
          <li><strong>Net touch:</strong> a player’s clothing or body touches the net.</li>
          <li><strong>Foot fault:</strong> serving player steps on or over the end line.</li>
        </ul>
      </section>

      <section id="scoring" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Scoring System</h2>
        <p className="mb-4">
          Rally scoring is used: a point is awarded on every rally, regardless of which team served.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Sets 1–4 go to 25 points (win by 2 points).</li>
          <li>5th set (tiebreak) goes to 15 points (win by 2 points).</li>
        </ul>
      </section>

      <section id="game-formats">
        <h2 className="text-3xl font-semibold mb-4">Game Formats</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Indoor:</strong> 6 vs. 6 format on hard court.</li>
          <li><strong>Beach:</strong> 2 vs. 2 on sand, smaller court.</li>
          <li><strong>Sitting:</strong> Paralympic format with lower net.</li>
        </ul>
      </section>
    </div>
  );
}
