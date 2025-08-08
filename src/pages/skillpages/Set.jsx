// src/pages/skillpages/Set.jsx
import React from "react";

export default function Set() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Setting: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Official Setting Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Clean Contact:</strong> Both hands contact simultaneously; no spin.</li>
          <li><strong>No Carry:</strong> Ball must rebound immediately—no scoop.</li>
          <li><strong>Double Contact:</strong> Sequential hand touches are faults.</li>
        </ul>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Stance:</strong> Feet shoulder-width, knees bent, weight forward.</li>
          <li><strong>Hand Shape:</strong> Thumbs/forefingers form triangle; fingers spread.</li>
          <li><strong>Body Alignment:</strong> Square shoulders; bend knees to meet ball.</li>
          <li><strong>Contact & Push:</strong> Push through ball with legs/arms; minimal scoop.</li>
          <li><strong>Follow-Through:</strong> Arms extend toward target; finish forward.</li>
        </ol>
      </section>

      {/* Positioning & Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positioning & Timing</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Step under the ball—lead foot into the set.</li>
          <li>Set low balls with a quick wrist snap (“1” call).</li>
          <li>High outside sets (“2”) allow more swing time—adjust feet early.</li>
        </ul>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setting Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>“1”</strong> – Quick middle set.</li>
          <li><strong>“2”</strong> – High outside set.</li>
          <li><strong>“3”</strong> – Back set behind head.</li>
          <li><strong>“Up!”</strong> – I’m under and ready.</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a href="https://youtu.be/MPJXohqY3g0" target="_blank" className="text-blue-600 hover:underline">
              Perfect Your Volleyball Set
            </a>
          </li>
          <li>
            <a href="https://youtu.be/5X5DyOxpzQ4" target="_blank" className="text-blue-600 hover:underline">
              Advanced Setting Drills
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
