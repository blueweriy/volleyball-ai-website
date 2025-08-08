// src/pages/skillpages/Block.jsx
import React from "react";

export default function Block() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Blocking: Rules & Techniques
      </h1>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Blocking Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Contact:</strong> Block contact is legal off an opponent’s attack or serve.</li>
          <li><strong>Multiple Blocks:</strong> Front-row teammates may block together; counts as one team contact.</li>
          <li><strong>No Penetration:</strong> You may reach over for a block but must not touch the net.</li>
          <li><strong>Open Hands:</strong> Blockers must not open palms too wide and catch or throw the ball.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/4AF6E289zk0"
            title="Volleyball Blocking Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: Front-Row Blocking Basics
        </p>
      </section>

      <section>
        <h3 className="font-serif text-xl font-semibold mb-2">Key Techniques</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg mb-6">
          <li>Read the hitter’s approach and arm swing.</li>
          <li>Time your jump at the peak of the attacker’s swing.</li>
          <li>Press your hands slightly over the net without touching it.</li>
          <li>Work with a partner on two-man block calls (“Seam!” “Line!”).</li>
        </ol>
      </section>
    </div>
  );
}
