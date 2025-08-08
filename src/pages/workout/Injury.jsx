// src/pages/workout/Injury.jsx
import React from "react";

export default function Injury() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto leading-relaxed">
      {/* Page Title */}
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Injury Prevention & Recovery
      </h1>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg text-gray-700">
          Staying healthy on the court means proactively preventing injuries
          and knowing the correct steps to recover if they occur. This guide
          covers mobility, strengthening, and immediate care protocols.
        </p>
      </section>

      {/* Prevention Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Prevention Strategies</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>Dynamic Warm-Ups:</strong> Leg swings, arm circles, hip
            openers & ankle rolls before every session to increase blood flow.
          </li>
          <li>
            <strong>Mobility Routine:</strong> Daily foam-rolling of calves,
            quads, IT bands, and thoracic spine; 2-minute holds per region.
          </li>
          <li>
            <strong>Stability Work:</strong> Single-leg balance drills on
            unstable surface (e.g. cushion) 3×30s each side—builds joint
            proprioception.
          </li>
          <li>
            <strong>Strength Balance:</strong> Unilateral lower-body exercises
            (Bulgarian split squats, single-leg RDLs) 2× per week to correct
            asymmetries.
          </li>
          <li>
            <strong>Core Stability:</strong> Planks, dead bugs, Pallof presses
            3×12–15 reps to protect spine under load.
          </li>
        </ul>
      </section>

      {/* Recovery Protocol */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Immediate Injury Care (PRICE)</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Protect:</strong> Stop play, support the injured area.
          </li>
          <li>
            <strong>Rest:</strong> Avoid weight-bearing for 24–48 hours.
          </li>
          <li>
            <strong>Ice:</strong> 15-minute ice packs every 2 hours for 72 hours.
          </li>
          <li>
            <strong>Compression:</strong> Elastic bandage wrap to reduce swelling.
          </li>
          <li>
            <strong>Elevation:</strong> Keep limb above heart level when possible.
          </li>
        </ul>
      </section>

      {/* Rehabilitation Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Rehab Exercises</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Ankle Pumps:</strong> Point/flex foot 20 reps, 3×/day to
            restore circulation and mobility.
          </li>
          <li>
            <strong>Knee Extensions:</strong> Seated weight-free extensions
            3×15, building quad control after knee sprain.
          </li>
          <li>
            <strong>Hip Bridges:</strong> 3×12 to strengthen glutes and
            stabilize pelvis.
          </li>
          <li>
            <strong>Shoulder Pendulums:</strong> Lean forward, let arm swing
            in circles 2×20 per direction for rotator cuff recovery.
          </li>
        </ol>
      </section>

      {/* Return to Play */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Return-to-Play Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            Ensure full range of motion and no swelling for 48 hours.
          </li>
          <li>
            Regain at least 90% strength compared to uninjured side.
          </li>
          <li>
            Complete sport-specific drills pain-free at full speed.
          </li>
        </ul>
      </section>

      {/* Additional Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Additional Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Listen to your body—modify if discomfort persists.</li>
          <li>Consult a medical professional for pain lasting >72 hours.</li>
          <li>Maintain general fitness (cardio/core) while isolating the injury.</li>
        </ul>
      </section>
    </div>
  );
}

