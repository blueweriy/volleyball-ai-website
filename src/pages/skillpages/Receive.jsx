// src/pages/skillpages/Receive.jsx
import React from "react";

export default function Receive() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Receiving: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Serve Receive Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Legal Contact:</strong> Must rebound cleanly—no lift/carry.</li>
          <li><strong>Boundary:</strong> Can step on but not over sideline/endline.</li>
          <li><strong>Teamwork:</strong> Call “Mine!” to avoid collisions.</li>
        </ul>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Platform:</strong> Arms straight, thumbs together, angle toward target.</li>
          <li><strong>Stance:</strong> Feet staggered, knees bent, weight forward.</li>
          <li><strong>Move:</strong> Step to the ball—don’t reach with arms.</li>
          <li><strong>Contact:</strong> Absorb with legs, keep platform firm.</li>
          <li><strong>Recovery:</strong> Return to base quickly after pass.</li>
        </ol>
      </section>

      {/* Positioning & Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positioning & Timing</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Angle platform to setter’s position—face your pass forward.</li>
          <li>Watch server’s toss height and spin for early read.</li>
        </ul>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Receive Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>“Mine!”</strong> – I’ll receive.</li>
          <li><strong>“Yours!”</strong> – Defer to other.</li>
          <li><strong>“Up!”</strong> – Ready under the ball.</li>
          <li><strong>“Left/Right!”</strong> – Adjust platform angle.</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://youtu.be/RWQ_j0Scm_M"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Volleyball Passing Drills
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/OBrzyCWVYVg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Advanced Passing Techniques
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
