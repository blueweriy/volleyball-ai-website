import React from "react";

export default function Spike() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      {/* Title */}
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Spiking: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Spiking Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Attack Contact:</strong> Ball may be hit above net height.</li>
          <li><strong>No Net Touch:</strong> Hands cannot touch net during a spike.</li>
          <li><strong>Back-Row Attack:</strong> Back-row hitters must jump from behind the 3m line.</li>
        </ul>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed">
          <li>
            <strong>Approach:</strong> Three- or four-step approach (e.g., left-right-left for right-handers), arms swing back for momentum.
          </li>
          <li>
            <strong>Jump & Reach:</strong> Explode off both feet, drive up through hips, reach full extension at peak.
          </li>
          <li>
            <strong>Arm Swing:</strong> Pull arm down and snap wrist at contact for topspin; keep wrist stiff for a tool shot.
          </li>
          <li>
            <strong>Contact Point:</strong> Strike slightly in front of shoulder—project ball downwards.
          </li>
          <li>
            <strong>Landing:</strong> Land balanced inside the court ready to transition to defense.
          </li>
        </ol>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>
            <strong>Setter “1”:</strong> Quick low set for middle attacker.
          </li>
          <li>
            <strong>Setter “2”:</strong> High outside set for left-side hitter.
          </li>
          <li>
            <strong>“Line!”</strong> – Defenders, cover the sideline attack.
          </li>
          <li>
            <strong>“Cross!”</strong> – Defenders, cover cross-court angles.
          </li>
          <li>
            <strong>“Tool!”</strong> – Expect off-block tool shot to the antenna.
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="font-serif text-2xl font-semibold mb-4">Resources</h2>
        <p className="text-lg leading-relaxed mb-4">
          Watch these to master your hitting mechanics:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://www.youtube.com/watch?v=uwyn8I_c2eY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              How to Spike a Volleyball
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=buuVdFyabQM"
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
