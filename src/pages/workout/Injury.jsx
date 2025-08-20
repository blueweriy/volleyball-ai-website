// src/pages/Injury.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Injury() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }} // consistent side margins
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Injury Prevention</h1>
      <p className="text-lg text-gray-700 mb-10">
        Build durability with smart warm-ups, mobility, stability, and recovery. Use the plan below
        2–4×/week (20–30 min) on practice or lift days. Aim for quality over volume; stop if pain
        changes your movement pattern.
      </p>

      {/* Quick Principles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Gradual load:</strong> Increase total weekly volume ≤10% (sets × reps × weight or minutes).</li>
          <li><strong>Technique first:</strong> Perfect form at low load before speed or complexity.</li>
          <li><strong>Balance:</strong> Pair push/pull, quad/hip-hinge, and left/right sides.</li>
          <li><strong>RPE 6–7/10:</strong> Preventive work should feel “comfortable challenging.”</li>
          <li><strong>Recover:</strong> Sleep 7–9 h/night, hydrate, and fuel (carbs + protein).</li>
        </ul>
      </section>

      {/* Warm-Up Block */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Structured Warm-Up (8–10 min)</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Temperature (2 min):</strong> Easy jog, jump rope, or bike.
          </li>
          <li>
            <strong>Dynamic Mobility (3–4 min):</strong> Leg swings (front/side) × 10/side, arm circles × 10/dir,
            world’s greatest stretch × 5/side, hip openers × 10/side, ankle rocks × 10/side.
          </li>
          <li>
            <strong>Activation (3–4 min):</strong> Mini-band lateral walks 2×10/side, glute bridges 2×12,
            Y-T-W shoulder raises 1×8 each.
          </li>
        </ol>
      </section>

      {/* Mobility Block */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Targeted Mobility (6–8 min)</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Thoracic extension on foam roller:</strong> 2×30–45 s (breathe, avoid neck strain).</li>
          <li><strong>Posterior capsule stretch (sleeper):</strong> 2×30 s/side (gentle, no shoulder pinch).</li>
          <li><strong>Hip flexor with posterior pelvic tilt:</strong> 2×30 s/side.</li>
          <li><strong>Ankle dorsiflexion (knee-to-wall):</strong> 2×10 slow rocks/side.</li>
          <li><strong>Hamstring floss (banded):</strong> 1×15/side, smooth range.</li>
        </ul>
      </section>

      {/* Stability & Control */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Stability & Control (8–12 min)</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Scapular control:</strong> Prone Y-T-W 2×8 each (2 s hold at top).
          </li>
          <li>
            <strong>Rotator cuff:</strong> Band external rotation at 0–30° abduction 2×12/side; band internal rotation 2×12/side.
          </li>
          <li>
            <strong>Knee/hip alignment:</strong> Step-down (8–10″ box) 3×8/side — knee tracks over 2nd toe.
          </li>
          <li>
            <strong>Single-leg balance:</strong> 2×30 s/side; progress to eyes-closed or unstable surface if perfect.
          </li>
          <li>
            <strong>Core anti-rotation (Pallof press):</strong> 2×12/side with band; ribs down, glutes on.
          </li>
        </ol>
      </section>

      {/* Landing & Change of Direction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Landing Mechanics & Change of Direction (6–8 min)</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Drop landing</strong> (8–12″ box): 3×5 — quiet feet, knees over toes, chest tall, stick 2 s.</li>
          <li><strong>Lateral hop & stick:</strong> 3×5/side — small distance; progress only with pristine control.</li>
          <li><strong>Decel shuffle → plant → backpedal:</strong> 4×10–15 m — sink hips before plant, no knee valgus.</li>
        </ul>
      </section>

      {/* Recovery Toolkit */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recovery & Load Management</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Post-session cool-down (5–8 min):</strong> Easy bike or walk + light static stretches for tight spots.</li>
          <li><strong>Hydration:</strong> ~30–35 ml/kg/day baseline; +500–700 ml/hour of practice (adjust for sweat rate).</li>
          <li><strong>Protein:</strong> 0.3 g/kg within 1 h post; daily total 1.6–2.2 g/kg during heavy blocks.</li>
          <li><strong>Sleep:</strong> 7–9 h; keep consistent bed/wake times.</li>
          <li><strong>Pain scale rule:</strong> ≤3/10 and not worsening next day → acceptable; >3/10 or next-day flare → regress or rest.</li>
          <li><strong>Acute spikes:</strong> Avoid sudden jumps in jump count, sprints, or new shoes/surfaces; ramp gradually.</li>
        </ul>
      </section>

      {/* Common Areas & Mini Protocols */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Areas & Mini-Protocols</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Shoulder (Spikers/Setters)</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li><strong>Band ER/IR</strong> 2–3×/wk, 2–3×12 each.</li>
          <li><strong>Scap push-ups</strong> 2×12; <strong>face pulls</strong> 2×15.</li>
          <li><strong>Thoracic mobility</strong> (open book/foam roll) 2×30–45 s/side.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Knee (Patellar Tendon)</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li><strong>Isometric wall sit</strong> 4×30–45 s, RPE 6–7.</li>
          <li><strong>Tempo squats</strong> 3×8 @ 3–1–1 (down–pause–up), pain-free depth.</li>
          <li><strong>Landing drills</strong> (stick) 3×5; avoid valgus.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ankle (Sprain Prevention)</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li><strong>SL balance</strong> 2×30–45 s/side → add head turns/eyes closed.</li>
          <li><strong>Heel raises</strong> 3×15 (full range); <strong>tibialis raises</strong> 2×15.</li>
          <li><strong>Ankle dorsiflexion rocks</strong> 2×10/side.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Low Back (General)</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li><strong>McGill big three:</strong> Curl-up 2×10 (10 s holds), Side plank 2×20–30 s/side, Bird dog 2×8/side (5 s holds).</li>
          <li><strong>Hip hinge patterning</strong> with dowel 2×10.</li>
          <li><strong>Hip flexor + hamstring</strong> mobility 2×30 s each.</li>
        </ul>
      </section>

      {/* Red Flags */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to Seek Medical Evaluation</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Pain &gt; 3/10 that <strong>persists or worsens</strong> after 48–72 h of rest/modification.</li>
          <li><strong>Night pain</strong>, numbness/tingling, or <strong>loss of strength</strong> or control.</li>
          <li><strong>Joint instability</strong>, locking/catching, or obvious deformity after an incident.</li>
          <li><strong>Head impact</strong> with dizziness, headache, confusion, or visual changes.</li>
        </ul>
      </section>

      {/* Return to Play Ladder */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Return-to-Play Progression (Pain ≤3/10)</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li><strong>Stage 1:</strong> Pain-free daily activities & stability work.</li>
          <li><strong>Stage 2:</strong> Low-impact conditioning + technique drills (no jump/impact).</li>
          <li><strong>Stage 3:</strong> Controlled jumping/landing, short practice segments.</li>
          <li><strong>Stage 4:</strong> Full practice (no restrictions) for 1 week.</li>
          <li><strong>Stage 5:</strong> Full match play.</li>
        </ol>
      </section>

      {/* Smart Self-Care */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Smart Self-Care</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Ice/heat:</strong> Ice 10–15 min in the first 24–48 h after acute flare; heat for stiffness (not swelling).</li>
          <li><strong>Compression & elevation:</strong> Helpful for ankle/knee swelling post-practice.</li>
          <li><strong>Footwear:</strong> Replace worn shoes; consider ankle braces if history of sprain (team policy permitting).</li>
          <li><strong>Deload week:</strong> Every 4–6 weeks, reduce jump count & intensity 20–30%.</li>
        </ul>
      </section>

      {/* Back Link */}
      <Link to="/workout" className="inline-block text-blue-600 hover:underline">
        ← Back to Workout
      </Link>
    </div>
  );
}
