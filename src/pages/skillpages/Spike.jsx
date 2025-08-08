// src/pages/skillpages/Spike.jsx
import React from "react";

export default function Spike() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Spiking: Rules & Techniques
      </h1>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Spiking Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Attack Contact:</strong> Ball may be swung above net height.</li>
          <li><strong>Net Safety:</strong> No net contact by any part of the body.</li>
          <li><strong>Back-Row Attack:</strong> Back-row hitters must jump from behind the attack line.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/uwyn8I_c2eY"
            title="Volleyball Spiking Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: How to Spike a Volleyball
        </p>
      </section>

      <section>
        <h3 className="font-serif text-xl font-semibold mb-2">Key Techniques</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Approach 3-step (left-right-left for righties), arms swing back.</li>
          <li>Jump explosively, driving upward with legs.</li>
          <li>Reach full extension at peak, snap wrist for angle.</li>
          <li>Aim for open seams or off-block “tool” shots.</li>
        </ol>
      </section>
    </div>
  );
}
