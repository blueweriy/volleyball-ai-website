// src/pages/skillpages/Receive.jsx
import React from "react";

export default function Receive() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Receiving (Serve Receive)
      </h1>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Serve Receive Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Legal Contact:</strong> Ball must rebound cleanly—no lift or carry.</li>
          <li><strong>Lines:</strong> You may step on but not completely over any boundary line.</li>
          <li><strong>Formation:</strong> Communication (“Mine!”) prevents collisions.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/RWQ_j0Scm_M"
            title="Volleyball Passing Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: Volleyball Passing Drills
        </p>
      </section>

      <section>
        <h3 className="font-serif text-xl font-semibold mb-2">Key Techniques</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Form a solid platform—elbows locked, thumbs together.</li>
          <li>Move feet to the ball; do not reach with arms alone.</li>
          <li>Communicate loudly to call your ball first.</li>
          <li>Angle platform toward setter for an easy second contact.</li>
        </ol>
      </section>
    </div>
  );
}
