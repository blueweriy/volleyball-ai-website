// src/pages/skillpages/Serve.jsx
import React from "react";

export default function Serve() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto">
      {/* Smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Page Title */}
      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Serving: Rules & Techniques
      </h1>

      {/* Serving Rules */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Official Serving Rules</h2>
        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          <li>
            <strong>Service Zone:</strong> Serve from behind the end line, within sidelines.
          </li>
          <li>
            <strong>Foot Fault:</strong> Do not step on or over the end line until after contact.
          </li>
          <li>
            <strong>Clean Hit:</strong> Ball must be struck—not caught or thrown.
          </li>
          <li>
            <strong>In Bounds:</strong> Ball must clear the net and land inside opponent’s court (touching line counts).
          </li>
          <li>
            <strong>Rotation:</strong> Serve order follows rotation—out-of-turn serve is a fault.
          </li>
        </ul>
      </section>

      {/* Underhand Serve */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Underhand Serve</h2>
        <p className="mb-4 leading-relaxed">
          Ideal for beginners or when you need precise placement.
        </p>
        <ol className="list-decimal list-inside space-y-2 leading-relaxed">
          <li>
            <strong>Grip:</strong> Hold ball in non-dominant hand at waist height, palm up.
          </li>
          <li>
            <strong>Stance:</strong> Feet shoulder-width, non-dominant foot forward.
          </li>
          <li>
            <strong>Swing:</strong> Pendulum swing with dominant arm, contact with heel of hand or fist.
          </li>
          <li>
            <strong>Contact:</strong> Hit lower half of ball, forward brushing motion to lift.
          </li>
          <li>
            <strong>Follow Through:</strong> Continue swing upward; step forward as you strike.
          </li>
        </ol>
      </section>

      {/* Overhand Serve */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Overhand Serve</h2>
        <p className="mb-4 leading-relaxed">
          The most common power serve—use for aggressive play.
        </p>
        <ol className="list-decimal list-inside space-y-2 leading-relaxed">
          <li>
            <strong>Toss:</strong> Toss ball 1–2 ft above hitting shoulder, slightly forward.
          </li>
          <li>
            <strong>Arm Cock:</strong> Elbow high, hand open behind head.
          </li>
          <li>
            <strong>Step & Swing:</strong> Step with opposite foot, swing arm forward, snap wrist.
          </li>
          <li>
            <strong>Contact:</strong> Strike center of ball with palm, drive through net.
          </li>
          <li>
            <strong>Finish:</strong> Follow through across body, land balanced.
          </li>
        </ol>
      </section>

      {/* Float Serve */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Float Serve</h2>
        <p className="mb-4 leading-relaxed">
          A no-spin serve that “floats” unpredictably.
        </p>
        <ol className="list-decimal list-inside space-y-2 leading-relaxed">
          <li>Use overhand toss and arm path.</li>
          <li>Contact ball squarely in center, stiff wrist, no brush.</li>
          <li>Aim for seams—this disrupts airflow for maximum float.</li>
          <li>Follow through is minimal to avoid imparting spin.</li>
        </ol>
      </section>

      {/* Jump Serve */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Jump Serve</h2>
        <p className="mb-4 leading-relaxed">
          Combines power and deception—requires approach and jump.
        </p>
        <ol className="list-decimal list-inside space-y-2 leading-relaxed">
          <li>Take 2–3 step approach to build momentum.</li>
          <li>Toss ball 2–3 ft above reach, slightly forward.</li>
          <li>Explosive jump off both feet, eyes locked on ball.</li>
          <li>Swing arm over—snap for topspin or stiffen for float.</li>
          <li>Land inside end line in ready defensive position.</li>
        </ol>
      </section>
    </div>
  );
}
