// src/pages/workout/Injury.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Injury() {
  return (
    <div
      className="bg-white text-gray-900 py-16 leading-relaxed"
      style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <h1 className="text-4xl font-bold mb-6">Injury Prevention</h1>
      <p className="text-lg text-gray-700 mb-10">
        Build durability with smart warm-ups, mobility, stability, and recovery. Use the plan below
        2–4×/week (20–30 min) on practice or lift days. Aim for quality over volume; stop if pain
        changes your movement pattern.
      </p>

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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Structured Warm-Up (8–10 min)</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li><strong>Temperature (2 min):</strong> Easy jog, jump rope, or bike.</li>
          <li><strong>Dynamic Mobility (3–4 min):</strong> Leg swings ×10/side, arm circles ×10/dir, world’s greatest stretch ×5/side, hip openers ×10/side, ankle rocks ×10/side.</li>
          <li><strong>Activation (3–4 min):</strong> Mini-band lateral walks 2×10/side, glute bridges 2×12, Y-T-W raises 1×8 each.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Targeted Mobility (6–8 min)</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>T-spine extension on roller:</strong> 2×30–45 s.</li>
          <li><strong>Sleeper stretch:</strong> 2×30 s/side (gentle; no pinch).</li>
          <li><strong>Hip flexor w/ posterior tilt:</strong> 2×30 s/side.</li>
          <li><strong>Ankle dorsiflexion (knee-to-wall):</strong> 2×10 rocks/side.</li>
          <li><strong>Hamstring floss (banded):</strong> 1×15/side.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Stability & Control (8–12 min)</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li><strong>Scap control:</strong> Prone Y-T-W 2×8 each (2 s hold).</li>
          <li><strong>Rotator cuff:</strong> Band ER/IR 2×12/side.</li>
          <li><strong>Knee/hip alignment:</strong> Step-down (8–10″ box) 3×8/side — knee over 2nd toe.</li>
          <li><strong>Single-leg balance:</strong> 2×30 s/side → progress to eyes-closed.</li>
          <li><strong>Pallof press:</strong> 2×12/side (band), ribs down.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Landing Mechanics & Change of Direction (6–8 min)</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Drop landing</strong> (8–12″): 3×5 — quiet feet, knees over toes, stick 2 s.</li>
          <li><strong>Lateral hop & stick:</strong> 3×5/side — progress only with perfect control.</li>
          <li><strong>Decel shuffle → plant → backpedal:</strong> 4×10–15 m — sink hips before plant.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recovery & Load Management</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Cool-down (5–8 min):</strong> Easy bike/walk + light static stretches.</li>
          <li><strong>Hydration:</strong> ~30–35 ml/kg/day baseline; +500–700 ml/hour of practice.</li>
          <li><strong>Protein:</strong> 0.3 g/kg within 1 h post; daily total 1.6–2.2 g/kg during heavy blocks.</li>
          <li><strong>Sleep:</strong> 7–9 h; consistent schedule.</li>
          <li><strong>Pain rule:</strong> ≤3/10 and not worse next day → OK; &gt;3/10 or next-day flare → regress or rest.</li>
          <li><strong>Avoid acute spikes:</strong> Ramp jump count/sprints/surface changes gradually.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Areas & Mini-Protocols</h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">Shoulder</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Band ER/IR 2–3×/wk, 2–3×12 each.</li>
          <li>Scap push-ups 2×12; face pulls 2×15.</li>
          <li>T-spine mobility 2×30–45 s/side.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Knee (Patellar Tendon)</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Isometric wall sit 4×30–45 s (RPE 6–7).</li>
          <li>Tempo squats 3×8 @ 3-1-1, pain-free depth.</li>
          <li>Landing drills (stick) 3×5 — avoid valgus.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Ankle</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>Single-leg balance 2×30–45 s/side → add head turns/eyes closed.</li>
          <li>Heel raises 3×15; tibialis raises 2×15.</li>
          <li>Ankle DF rocks 2×10/side.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Low Back</h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li>McGill Big 3: Curl-up 2×10 (10 s holds), Side plank 2×20–30 s/side, Bird dog 2×8/side (5 s holds).</li>
          <li>Hip hinge patterning with dowel 2×10.</li>
          <li>Hip flexor + hamstring mobility 2×30 s each.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to Seek Medical Evaluation</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Pain &gt; 3/10 that persists or worsens after 48–72 h of rest/modification.</li>
          <li>Night pain, numbness/tingling, or noticeable strength/control loss.</li>
          <li>Instability, locking/catching, or deformity after an incident.</li>
          <li>Head impact with dizziness, headache, confusion, or visual changes.</li>
        </ul>
      </section>

      <Link to="/workout" className="inline-block text-blue-600 hover:underline">
        ← Back to Workout
      </Link>
    </div>
  );
}
