// src/pages/skillpages/Dig.jsx
import React from "react";

export default function Dig() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Digging: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dig Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Legal Contact:</strong> Any body part may be used—no carry.</li>
          <li><strong>Immediate Rebound:</strong> Ball must leave contact instantly.</li>
        </ul>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Ready Stance:</strong> Low base, knees bent, weight back.</li>
          <li><strong>Platform/Hand:</strong> Arms angled upward, hands together.</li>
          <li><strong>Movement:</strong> Quick shuffle or dive—lead with shoulder.</li>
          <li><strong>Contact:</strong> Absorb with legs; aim platform at setter.</li>
          <li><strong>Recovery:</strong> Push off ground into ready stance.</li>
        </ol>
      </section>

      {/* Positioning & Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positioning & Timing</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Watch hitter’s shoulder and approach to anticipate.</li>
          <li>Commit early on hard-driven spikes—no hesitation.</li>
        </ul>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dig Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>“Mine!”</strong> – I’ll dig.</li>
          <li><strong>“Yours!”</strong> – Defer to other digger.</li>
          <li><strong>“Dive!”</strong> – Prepare to dive for ball.</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://youtu.be/6AnCdkMcTIk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Pro Digging Techniques
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/LXqnrN_FG-I"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Advanced Dig Drills
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
