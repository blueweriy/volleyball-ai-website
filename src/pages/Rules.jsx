// src/pages/Rules.jsx
import React from "react";

export default function Rules() {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto ml-6">
      {/* Smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">Volleyball Rules</h1>

      {/* Table of Contents */}
      <nav className="mb-12 border-b pb-4">
        <h2 className="text-2xl font-semibold mb-2">Contents</h2>
        <ul className="list-disc list-inside space-y-2">
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
        <div className="leading-loose mb-4">
          <p>
            Volleyball is a fast-paced, team sport in which two teams of six players each
            are separated by a net and compete to ground the ball on the opponent’s court.  
          </p>
          <p>
            The ball is served from behind the end line, over the net into the opponent’s
            court. Each team is allowed up to three successive contacts (passes, sets, spikes)
            to return the ball.  
          </p>
          <p>
            Players rotate clockwise to new positions each time they win back the serve,
            ensuring every member participates both in front‐row attacks and back‐row defense.  
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Serve: Underhand or overhand, must clear the net and land in bounds.</li>
            <li>Pass: First contact, usually a forearm “bump” to control the serve.</li>
            <li>Set: Second contact, overhead pass to position for an attack.</li>
            <li>Attack (Spike): Third contact, a forceful downward hit.</li>
            <li>Block: Front‐row defensive jump to stop an opponent’s attack.</li>
          </ul>
        </div>
      </section>

      <section id="court-dimensions" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Court Dimensions</h2>
        <div className="leading-loose mb-4">
          <p>
            A standard volleyball court measures 18 m long by 9 m wide (59 ft × 29½ ft), divided
            in half by a central net. Boundaries are marked on the floor, and any part of the ball
            touching the line is considered in play.  
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Center line: Directly beneath the net, dividing the two halves.</li>
            <li>Attack line: 3 m (9 ft 10 in) from the net on both sides, marking front‐row vs. back‐row.</li>
            <li>Service area: 3 m behind the end line; server may move laterally along this line.</li>
            <li>Free zone: Minimum 3 m around the court for player movement.</li>
            <li>Net height: 2.43 m (7 ft 11⅝ in) for men, 2.24 m (7 ft 4⅛ in) for women.</li>
          </ul>
        </div>
      </section>

      <section id="basic-rules" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Basic Rules</h2>
        <div className="leading-loose mb-4">
          <p>
            Play begins with a serve and continues until the ball touches the ground, a fault
            occurs, or the ball is played out of bounds.  
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>The ball may be played with any part of the body but must not be held or thrown.</li>
            <li>Players cannot touch the net or step over the center line during play.</li>
            <li>A block or simultaneous contact at the net counts as one team contact.</li>
            <li>Back‐row players cannot attack the ball above the net from in front of the attack line.</li>
            <li>On the serve, the ball must be cleanly hit, not caught or thrown.</li>
          </ul>
        </div>
      </section>

      <section id="rule-violations" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Rule Violations</h2>
        <div className="leading-loose mb-4">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Double contact:</strong> A single player contacts the ball twice in succession (except on a first hard-driven serve or attack).</li>
            <li><strong>Four hits:</strong> The team makes more than three consecutive contacts.</li>
            <li><strong>Net touch:</strong> Any part of the player’s body or uniform touches the net while the ball is in play.</li>
            <li><strong>Foot fault:</strong> The server steps on or over the end line before contacting the ball.</li>
            <li><strong>Back‐row attack:</strong> A back‐row player jumps and contacts the ball above the net from in front of the attack line.</li>
            <li><strong>Lift/Catch:</strong> The ball comes to rest momentarily in the hands.</li>
          </ul>
        </div>
      </section>

      <section id="scoring" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Scoring System</h2>
        <div className="leading-loose mb-4">
          <p>
            Modern volleyball uses rally scoring: every rally results in a point, regardless of which team served.
            Matches are typically best‐of‐five sets.  
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Sets 1–4 are played to 25 points (must win by 2 points).</li>
            <li>If tied 24–24, play continues until one team leads by 2.</li>
            <li>5th set (tiebreak) is played to 15 points (must win by 2).</li>
            <li>Technical timeouts occur at 8 and 16 points in each set 1–4.</li>
          </ul>
        </div>
      </section>

      <section id="game-formats">
        <h2 className="text-3xl font-semibold mb-4">Game Formats</h2>
        <div className="leading-loose mb-4">
          <p>
            Volleyball has several variations played worldwide, each with unique rules and team sizes.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li><strong>Indoor (6 vs. 6):</strong> Standard format on a hard court with specialized positions.</li>
            <li><strong>Beach (2 vs. 2):</strong> Smaller court on sand; fewer players increases all‐round skill demands.</li>
            <li><strong>Sitting Volleyball:</strong> Paralympic discipline; players remain seated and the net is lower.</li>
            <li><strong>Mini Volleyball:</strong> Youth version on a smaller court, lower net, fewer players.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
