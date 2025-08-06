// src/pages/Callouts.jsx
import React from "react";

export default function Callouts() {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto">
      {/* Smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <h1 className="text-4xl font-bold mb-8 text-center">Court Call-Outs & Glossary</h1>

      {/* Table of Contents */}
      <nav className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-semibold mb-2">Contents</h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            <a href="#basic" className="text-blue-600 hover:underline">
              Basic Call-Outs
            </a>
          </li>
          <li>
            <a href="#advanced" className="text-blue-600 hover:underline">
              Advanced Call-Outs
            </a>
          </li>
          <li>
            <a href="#glossary" className="text-blue-600 hover:underline">
              Volleyball Glossary
            </a>
          </li>
        </ul>
      </nav>

      {/* 1. Basic Call-Outs */}
      <section id="basic" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">1. Basic Call-Outs</h2>
        <ul className="list-disc list-inside space-y-3 leading-relaxed">
          <li>
            <strong>Mine!</strong> – I’ve got this ball; don’t dive.
          </li>
          <li>
            <strong>Yours!</strong> – Please take it—I’m clear.
          </li>
          <li>
            <strong>Up!</strong> – I’m under it and ready to set.
          </li>
          <li>
            <strong>Ball!</strong> – Watch out: loose ball near you.
          </li>
          <li>
            <strong>Switch!</strong> – Rotate coverage—shift your position.
          </li>
          <li>
            <strong>Late!</strong> – I’ll be late getting there.
          </li>
        </ul>
      </section>

      {/* 2. Advanced Call-Outs */}
      <section id="advanced" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">2. Advanced Call-Outs</h2>
        <ul className="list-disc list-inside space-y-3 leading-relaxed">
          <li>
            <strong>Pipe!</strong> – Back-row attacker ready for middle hit.
          </li>
          <li>
            <strong>Line!</strong> – Direct me for a line-shot block.
          </li>
          <li>
            <strong>Roll!</strong> – Cover the slower roll shot.
          </li>
          <li>
            <strong>Short!</strong> – Drop shot near the net—watch it.
          </li>
          <li>
            <strong>Off!</strong> – Ball is out; reset for serve.
          </li>
          <li>
            <strong>Block!</strong> – Front row, form up for the block.
          </li>
          <li>
            <strong>Seam!</strong> – Jam the seam between our blockers.
          </li>
          <li>
            <strong>Tool!</strong> – Expect an off-block tool attack.
          </li>
        </ul>
      </section>

      {/* 3. Glossary */}
      <section id="glossary" className="mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">3. Volleyball Glossary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Area Block", "Two front-row players block side-by-side to cover a wide angle."],
            ["Back-Row Attack", "An attack by a back-row player jumping from behind the attack line."],
            ["Block", "Defensive play at the net to stop or deflect an opponent’s attack."],
            ["Dig", "A forearm or overhead defensive pass to keep the ball off the floor."],
            ["Dump", "Setter’s surprise tip over the net on the second contact."],
            ["Free Ball", "An opponent’s non-attack hit over the net, usually easy to pass."],
            ["Jump Float Serve", "Serve with minimal spin, causing unpredictable trajectory."],
            ["Kill", "An attack that results directly in a point."],
            ["Libero", "Specialized back-row defensive player; cannot attack above net height."],
            ["Pipe Attack", "A back-row attack from Position 6, typically down the middle."],
            ["Quick Set (1)", "A fast, low set to the middle hitter immediately off the pass."],
            ["Roll Shot", "An off-speed attack with topspin to drop the ball just over the net."],
            ["Seam Block", "Blocker targets the gap (seam) between two opposing hitters."],
            ["Setter", "Player who orchestrates offense by setting the ball for attackers."],
            ["Slide", "One-footed attack by a middle blocker moving laterally along the net."],
            ["Stuff Block", "A block that deflects the ball straight down for an immediate point."],
            ["Tool", "Attack directed off the blocker’s hands out of bounds on opponent’s side."],
            ["Toss-Serve", "Underhand serve where ball is tossed slightly before contact."],
            ["Three-Hit Train", "Quick succession of bump/set/spike within one play."],
            ["Wipe", "Off-speed hit off the blocker’s hands to redirect the ball."],
          ].map(([term, desc]) => (
            <div
              key={term}
              className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <dt className="font-bold text-lg text-indigo-600 uppercase">{term}</dt>
              <dd className="mt-2 text-gray-700 leading-relaxed">{desc}</dd>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
