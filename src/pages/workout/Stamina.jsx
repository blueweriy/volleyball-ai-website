// src/pages/workout/Stamina.jsx
import React from "react";

export default function Stamina() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto leading-relaxed">
      {/* Page Title */}
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Stamina Program
      </h1>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg text-gray-700">
          Volleyball is as much about endurance as it is about power—long rallies,
          quick recoveries, and sustained energy levels. This program develops both
          cardiovascular and muscular endurance so you can perform explosively
          throughout every point and every set.
        </p>
      </section>

      {/* Program Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Frequency:</strong> 3 sessions per week, alternating interval days with circuit days.</li>
          <li><strong>Duration:</strong> 30–45 minutes per session.</li>
          <li><strong>Warm-Up:</strong> 5–10 minutes of light jog, dynamic leg and arm swings, hip openers.</li>
          <li><strong>Cool-Down:</strong> 5–10 minutes of static stretching to aid recovery.</li>
        </ul>
      </section>

      {/* Interval Training */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">High‐Intensity Interval Training (HIIT)</h2>
        <ol className="list-decimal list-inside space-y-6 text-lg">
          <li>
            <h3 className="font-semibold">Court-to-Court Sprints</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li><strong>Work:</strong> Sprint end line to end line (20–25m).</li>
              <li><strong>Rest:</strong> Walk or light jog back (90 seconds).</li>
              <li><strong>Rounds:</strong> 8–10.</li>
              <li><em>Benefit:</em> Mimics the repeated sprint demands of chasing down balls across the court.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Burpee Intervals</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li><strong>Work:</strong> 20 seconds of continuous burpees (full push-up + jump).</li>
              <li><strong>Rest:</strong> 40 seconds standing rest.</li>
              <li><strong>Rounds:</strong> 6–8.</li>
              <li><em>Benefit:</em> Combines upper‐body, core, and lower‐body endurance under fatigue.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Shuttle Run Ladder</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li><strong>Distances:</strong> 5m, 10m, 15m, 20m and back, performing each back-to-back.</li>
              <li><strong>Rest:</strong> 30 seconds between ladders.</li>
              <li><em>Benefit:</em> Trains change-of-direction endurance and aerobic recovery.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Endurance Circuit */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Endurance Circuit</h2>
        <ol className="list-decimal list-inside space-y-6 text-lg">
          <li>
            <h3 className="font-semibold">200m Shuttle Run</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Sprint 10m and back repeatedly until 200m is covered.</li>
              <li><em>Benefit:</em> Builds sustained sprint capacity and leg muscle endurance.</em></li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Air Squats</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Perform 20 controlled bodyweight squats at steady pace.</li>
              <li><em>Benefit:</em> Trains muscular endurance in quads and glutes under continuous load.</em></li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Push-Ups</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Do 15–20 reps at controlled tempo (2s down, 1s up).</li>
              <li><em>Benefit:</em> Enhances upper-body endurance for consistent arm swings and digs.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Plank Hold</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Hold full plank for 45 seconds, keeping body straight.</li>
              <li><em>Benefit:</em> Builds core endurance for stable posture under fatigue.</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold">Jumping Jacks</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Perform 30 controlled reps, full range arms and legs.</li>
              <li><em>Benefit:</em> Keeps heart rate elevated while mobilizing shoulders and hips.</li>
            </ul>
          </li>
          <li>
            <strong>Rest:</strong> 60 seconds, then repeat circuit 3–4 times.
          </li>
        </ol>
      </section>

      {/* Cool-Down */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cool-Down & Mobility</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Hamstring Stretch:</strong> Seated one-leg reach, hold 30s each side.</li>
          <li><strong>Quad Stretch:</strong> Standing quad pull, hold 30s each side.</li>
          <li><strong>Calf Stretch:</strong> Wall lean calf stretch, hold 30s each side.</li>
          <li><strong>Shoulder Mobility:</strong> Door frame pec stretch, hold 30s each arm.</li>
        </ul>
      </section>

      {/* Final Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Final Execution Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Maintain consistent pacing throughout intervals—avoid quick burnout.</li>
          <li>Use a stopwatch or app to track work/rest times precisely.</li>
          <li>Hydrate before, during, and after sessions to optimize endurance.</li>
        </ul>
      </section>
    </div>
  );
}
