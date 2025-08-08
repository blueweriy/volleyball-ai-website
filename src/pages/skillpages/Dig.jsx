// src/pages/skillpages/Dig.jsx
import React from "react";

export default function Dig() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Digging: Rules & Techniques
      </h1>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Dig Basics</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Legal Contact:</strong> Any part of the body may be used to dig.</li>
          <li><strong>No Carry:</strong> Ball must rebound immediately; no catching or throwing.</li>
          <li><strong>Safety:</strong> Keep chin tucked and eyes open on the ball’s trajectory.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/6AnCdkMcTIk"
            title="Volleyball Digging Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: Pro Digging Techniques
        </p>
      </section>

      <section>
        <h3 className="font-serif text-xl font-semibold mb-2">Key Techniques</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Maintain a low stance with bent knees.</li>
          <li>Platforms angled toward target—extend arms fully.</li>
          <li>Drive upward with legs, not just arms, on hard hits.</li>
          <li>Recover quickly to ready position after each dig.</li>
        </ol>
      </section>
    </div>
  );
}
