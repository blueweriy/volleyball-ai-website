import React from "react";

export default function Set() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      {/* Title */}
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Setting: Rules, Technique & Call-Outs
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Setting Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            <strong>Clean Contact:</strong> Both hands must contact the ball simultaneously; no spin allowed.
          </li>
          <li>
            <strong>No Carry:</strong> The ball must rebound immediately—no scooping or carrying.
          </li>
          <li>
            <strong>Double Contact:</strong> Two-hand touches at different times are a fault (except on a hard-driven attack).
          </li>
        </ul>
      </section>

      {/* Technique Details */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed">
          <li>
            <strong>Stance & Footwork:</strong>  
            Feet shoulder-width, knees bent, weight on the balls of feet. Step under the ball—right foot for right-handers.
          </li>
          <li>
            <strong>Hand Shape:</strong>  
            Thumbs and index fingers form a triangular “window” above forehead. Fingers spread, wrists firm but flexible.
          </li>
          <li>
            <strong>Approach & Body Alignment:</strong>  
            Square your shoulders toward your target, bend at hips so your arms are under the ball’s path.
          </li>
          <li>
            <strong>Contact & Push:</strong>  
            Let the ball contact your finger pads—push through with legs and arms in one smooth motion.
          </li>
          <li>
            <strong>Follow-Through:</strong>  
            Finish with arms extending toward target; don’t flare elbows out or scoop under.
          </li>
        </ol>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Call-Outs & Signals</h2>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>
            <strong>“One”</strong> – Quick set (tight “1” ball just above net for middle hitter).
          </li>
          <li>
            <strong>“Two”</strong> – High outside set (front-row right-side).
          </li>
          <li>
            <strong>“Three”</strong> – Back-set behind setter’s head.
          </li>
          <li>
            <strong>“Push”</strong> – Flat/faster drive set into the seam.
          </li>
          <li>
            <strong>“Up!”</strong> – I’m under and ready to set from my position.
          </li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="font-serif text-2xl font-semibold mb-4">Resources</h2>
        <p className="text-lg leading-relaxed mb-4">
          Here are some YouTube tutorials to deepen your setting skills:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://www.youtube.com/watch?v=MPJXohqY3g0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Perfect Your Volleyball Set
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=5X5DyOxpzQ4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Advanced Setting Drills & Tips
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
