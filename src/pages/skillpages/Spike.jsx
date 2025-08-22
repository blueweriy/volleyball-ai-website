// src/pages/skillpages/Spike.jsx
import React from "react";

export default function Spike() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Spiking: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Spiking Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Attack Contact:</strong> Ball may be struck above net height.</li>
          <li><strong>No Net Touch:</strong> No part of body may contact net.</li>
          <li><strong>Back-Row:</strong> Must jump from behind 3m line.</li>
        </ul>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Approach:</strong> Three-step (left-right-left); arms swing back.</li>
          <li><strong>Jump:</strong> Explode upward; eyes on setter’s release.</li>
          <li><strong>Contact:</strong> Full arm extension; snap wrist for topspin.</li>
          <li><strong>Placement:</strong> Aim for seams, lines, or off-block tool.</li>
          <li><strong>Landing:</strong> Land balanced, prepare for next play.</li>
        </ol>
      </section>

      {/* Positioning & Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positioning & Timing</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Watch setter’s fair catch and call “One” or “Two” early.</li>
          <li>Time your approach to meet the ball at peak height.</li>
        </ul>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Spike Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>“1”</strong> – Quick middle set.</li>
          <li><strong>“2”</strong> – High outside set.</li>
          <li><strong>“Line!”</strong> – Cover sideline angle.</li>
          <li><strong>“Cross!”</strong> – Cover cross-court angle.</li>
          <li><strong>“Tool!”</strong> – Expect deflect off-block shot.</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://youtu.be/uwyn8I_c2eY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              How to Spike a Volleyball
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/buuVdFyabQM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Pro Hitting Mechanics
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
