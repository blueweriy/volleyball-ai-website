// src/pages/Callouts.jsx
import React from "react";

export default function Callouts() {
  return (
    <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto">
        {/* Smooth scrolling */}
        <style>{`html { scroll-behavior: smooth; }`}</style>

        <h1 className="text-4xl font-bold mb-8 text-center">
          Court Call-Outs & Glossary
        </h1>

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
        <section id="glossary">
          <h2 className="text-3xl font-semibold mb-4">3. Volleyball Glossary</h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              <strong>Area Block</strong> – Two front-row players block side by
              side to cover a wide angle.
            </li>
            <li>
              <strong>Back-Row Attack</strong> – An attack by a back-row player
              jumping from behind the attack line.
            </li>
            <li>
              <strong>Block</strong> – Defensive play at the net to stop or
              deflect an opponent’s attack.
            </li>
            <li>
              <strong>Dig</strong> – A forearm or overhead defensive pass to
              keep the ball off the floor.
            </li>
            <li>
              <strong>Dump</strong> – Setter’s surprise tip over the net on the
              second contact.
            </li>
            <li>
              <strong>Free Ball</strong> – An opponent’s non-attack hit over the
              net, usually easy to pass.
            </li>
            <li>
              <strong>Jump Float Serve</strong> – Serve with minimal spin,
              causing an unpredictable trajectory.
            </li>
            <li>
              <strong>Kill</strong> – An attack that results directly in a
              point.
            </li>
            <li>
              <strong>Libero</strong> – Specialized back-row defensive player;
              cannot attack above net height.
            </li>
            <li>
              <strong>Overpass</strong> – When the ball comes off the blocker’s
              hands and crosses to opponent’s side.
            </li>
            <li>
              <strong>Pipe Attack</strong> – A back-row attack from Position 6,
              typically down the middle.
            </li>
            <li>
              <strong>Quick Set (1)</strong> – A fast, low set to the middle
              hitter immediately off the pass.
            </li>
            <li>
              <strong>Roll Shot</strong> – An off-speed attack with topspin to
              drop the ball just over the net.
            </li>
            <li>
              <strong>Seam Block</strong> – Blocker targets the gap (seam)
              between two opposing hitters.
            </li>
            <li>
              <strong>Setter</strong> – Player who orchestrates offense by
              setting the ball for attackers.
            </li>
            <li>
              <strong>Slide</strong> – One-footed attack by a middle blocker
              moving laterally along the net.
            </li>
            <li>
              <strong>Stuff Block</strong> – A block that deflects the ball
              straight down for an immediate point.
            </li>
            <li>
              <strong>Tool</strong> – Attack directed off the blocker’s hands
              out of bounds on opponent’s side.
            </li>
            <li>
              <strong>Underhand Serve</strong> – Serve executed with an
              underhand swing.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
