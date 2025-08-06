// src/pages/Callouts.jsx
import React from "react";

export default function Callouts() {
  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
      {/* Smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <h1 className="text-4xl font-bold mb-6">Volleyball Call-Outs & Glossary</h1>

      {/* Contents */}
      <nav className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-semibold mb-2">Contents</h2>
        <ul className="list-decimal list-inside space-y-1">
          <li><a href="#basic" className="text-blue-600 hover:underline">Basic Call-Outs</a></li>
          <li><a href="#numeric" className="text-blue-600 hover:underline">Numerical Call-Outs Diagram</a></li>
          <li><a href="#glossary" className="text-blue-600 hover:underline">Volleyball Glossary</a></li>
        </ul>
      </nav>

      {/* Basic Call-Outs */}
      <section id="basic" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">1. Basic Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 leading-loose">
          <li><strong>Mine!</strong> – I’ve got this ball. No need to dive.</li>
          <li><strong>Yours!</strong> – I defer to you; you take it.</li>
          <li><strong>Up!</strong> – Ready for a set; I’m under the ball.</li>
          <li><strong>Ball!</strong> – Alert teammates to a loose ball.</li>
          <li><strong>Switch!</strong> – We need to rotate coverage on a long rally.</li>
          <li><strong>Late!</strong> – I’ll be late to cover that area.</li>
        </ul>
      </section>

      {/* Numerical Call-Outs Diagram */}
      <section id="numeric" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">2. Numerical Call-Outs</h2>
        <p className="mb-6 leading-loose">
          Each court position is numbered to streamline communication during serve-receive and defense:
        </p>
        <img
          src="/numerical_callouts.png"
          alt="Numerical Call-Out Positions Diagram"
          className="w-full max-w-md mx-auto mb-4"
        />
        <p className="text-center text-gray-700 italic mb-6">
          Diagram: P1 right back → P2 right front → P3 middle front → P4 left front → P5 left back → P6 middle back
        </p>
      </section>

      {/* Glossary */}
      <section id="glossary">
        <h2 className="text-3xl font-semibold mb-4">3. Volleyball Glossary (A–Z)</h2>
        <dl className="leading-loose">
          <dt className="font-semibold">Area Block</dt>
          <dd className="ml-4 mb-2">Two front‐row players block side by side to cover a wide hitting angle.</dd>

          <dt className="font-semibold">Back-Row Attack</dt>
          <dd className="ml-4 mb-2">An attack by a back‐row player jumping from behind the attack line.</dd>

          <dt className="font-semibold">Block</dt>
          <dd className="ml-4 mb-2">Defensive play at the net to stop an opponent’s attack.</dd>

          <dt className="font-semibold">Dig</dt>
          <dd className="ml-4 mb-2">A forearm or overhead defensive pass to keep the ball in play after an attack.</dd>

          <dt className="font-semibold">Dump</dt>
          <dd className="ml-4 mb-2">Setter’s surprise attack on the second contact, tipping the ball over the net.</dd>

          <dt className="font-semibold">Free Ball</dt>
          <dd className="ml-4 mb-2">An opponent’s non‐attack hit over the net, usually easy to pass.</dd>

          <dt className="font-semibold">Kill</dt>
          <dd className="ml-4 mb-2">An attack that results directly in a point.</dd>

          <dt className="font-semibold">Libero</dt>
          <dd className="ml-4 mb-2">Specialized back‐row defensive player, wears a different jersey, cannot attack above net height.</dd>

          <dt className="font-semibold">Overpass</dt>
          <dd className="ml-4 mb-2">When the ball comes off the blocker’s hands and goes over to the opponent’s court.</dd>

          <dt className="font-semibold">Pipe Attack</dt>
          <dd className="ml-4 mb-2">A back‐row attack from Position 6, typically down the middle.</dd>

          <dt className="font-semibold">Quick Set (1)</dt>
          <dd className="ml-4 mb-2">A fast, low set to the middle hitter, executed immediately off the pass.</dd>

          <dt className="font-semibold">Seam Block</dt>
          <dd className="ml-4 mb-2">Blocker targets the seam between two opposing hitters to exploit coverage gaps.</dd>

          <dt className="font-semibold">Setter</dt>
          <dd className="ml-4 mb-2">Player who orchestrates the offense, distributing sets to hitters.</dd>

          <dt className="font-semibold">Slide</dt>
          <dd className="ml-4 mb-2">One-footed attack by a middle blocker moving laterally along the net.</dd>

          <dt className="font-semibold">Stuff Block</dt>
          <dd className="ml-4 mb-2">A block that deflects the ball straight down to the attacker’s side for an immediate point.</dd>

          <dt className="font-semibold">Tool</dt>
          <dd className="ml-4 mb-2">Attack directed off the blocker’s hands, out of bounds on the opponent’s side.</dd>

          <dt className="font-semibold">Underhand Serve</dt>
          <dd className="ml-4 mb-2">Serve executed with an underhand swing, typically used by beginners.</dd>
        </dl>
      </section>
    </div>
  );
}
