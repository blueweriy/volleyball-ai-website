// src/pages/skillpages/Serve.jsx
import React from "react";

export default function Serve() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Serving: Rules, Technique & Tips
      </h1>

      {/* Official Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Official Serving Rules</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Service Zone:</strong> Must serve from behind the end line, within sidelines.</li>
          <li><strong>Foot Fault:</strong> No stepping on/over end line until after contact.</li>
          <li><strong>Clean Hit:</strong> Must strike the ball—no catching or throwing.</li>
          <li><strong>In Bounds:</strong> Ball must clear net and land inside opponent’s court (line counts).</li>
          <li><strong>Rotation:</strong> Serve in correct rotation—out-of-turn is a fault.</li>
        </ul>
      </section>

      {/* Technique Breakdown */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technique Breakdown</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Grip & Stance:</strong> Ball in non-dominant hand at waist; feet shoulder-width, non-dominant foot forward.</li>
          <li><strong>Toss:</strong> For overhand: toss 1–2ft above shoulder, slightly forward. For underhand: hold ball low.</li>
          <li><strong>Swing:</strong> Underhand: pendulum swing contacting lower half. Overhand: arm cocked back, snap wrist at contact.</li>
          <li><strong>Contact Point:</strong> Center of ball for power; bottom half for lift.</li>
          <li><strong>Follow-Through:</strong> Continue arm path naturally; step into court for balance.</li>
        </ol>
      </section>

      {/* Positioning & Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Positioning & Timing</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Stand 1–2m behind end line for enough swing depth.</li>
          <li>Time toss to match swing speed—consistent height is key.</li>
          <li>Watch server’s foot placement in practice to avoid foot faults.</li>
        </ul>
      </section>

      {/* Call-Outs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Serve Call-Outs</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>“Watch Toss!”</strong> – Eyes on the ball’s release point.</li>
          <li><strong>“Server!”</strong> – Alert teammates you’re about to serve.</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <a
              href="https://youtu.be/qZr_7Cnlb_c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Underhand & Overhand Serve Basics
            </a>
          </li>
          <li>
            <a
              href="https://youtu.be/MWVdZ3M6B0I"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Jump Serve Tutorial
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
