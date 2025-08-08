// src/pages/skillpages/Set.jsx
import React from "react";

export default function Set() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Setting: Rules & Techniques
      </h1>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Setting Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Clean Contact:</strong> Hands form a “window,” ball rebounds free of spin.</li>
          <li><strong>No Lift:</strong> Ball must not come to rest on hands or be carried.</li>
          <li><strong>Double Touch:</strong> Two-handed contact must be simultaneous (except on hard-driven attack).</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/MPJXohqY3g0"
            title="Volleyball Setting Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: Perfect Your Volleyball Set
        </p>
      </section>

      <section>
        <h3 className="font-serif text-xl font-semibold mb-2">Key Techniques</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Square shoulders to target; bend knees to get under the ball.</li>
          <li>Hands form a “triangle” over forehead; thumbs and forefingers create a window.</li>
          <li>Use legs to drive upward through the ball—minimal arm scoop.</li>
          <li>Follow through hands toward target, not out to the sides.</li>
        </ol>
      </section>
    </div>
  );
}
