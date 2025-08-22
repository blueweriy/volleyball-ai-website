// src/pages/skillpages/Block.jsx
import React from "react";

export default function Block() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Blocking: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Blocking Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Legal Block:</strong> Block immediate off attacker’s contact.</li>
          <li><strong>Multiple Blockers:</strong> Two blockers allowed; one team contact.</li>
          <li><strong>No Net Contact:</strong> Hands may penetrate net plane but not touch net.</li>
          <li><strong>Open Hands:</strong> Palms too wide causing catch/throw is fault.</li>
        </ul>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Read Hitter:</strong> Watch shoulder & approach angle.</li>
          <li><strong>Footwork:</strong> Step to net with outside foot first.</li>
          <li><strong>Jump Timing:</strong> Jump as attacker’s arm pulls back.</li>
          <li><strong>Hand Position:</strong> Reach over net; fingers spread, wrists firm.</li>
          <li><strong>Press & Seal:</strong> Press blockers into hitter’s contact area.</li>
        </ol>
      </section>

      {/* Positioning & Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positioning & Timing</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Communicate with partner: call “Seam” or “Line”.</li>
          <li>Form two-man block on strong attackers—seal seam gap.</li>
        </ul>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Block Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>“Seam!”</strong> – Block gap between hitters.</li>
          <li><strong>“Line!”</strong> – Block straight line attack.</li>
          <li><strong>“Switch!”</strong> – Rotate blocking assignments.</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://youtu.be/4AF6E289zk0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Front-Row Blocking Basics
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/KX3vXnYSRnU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Seam & Double-Block Tactics
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
