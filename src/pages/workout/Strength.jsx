// src/pages/workout/Strength.jsx
import React from "react";

export default function Strength() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto leading-relaxed">
      {/* Page Title */}
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Strength Program
      </h1>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg text-gray-700">
          Building raw strength lays the foundation for powerful jumps, dynamic
          swings, and stable landings. This program splits between lower‐body
          and upper‐body lifts to target the key muscle groups volleyball players
          rely on—quads, glutes, hamstrings, shoulders, back, and core.
        </p>
      </section>

      {/* Program Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Frequency:</strong> 2 sessions lower‐body, 2 sessions upper‐body per week.
          </li>
          <li>
            <strong>Warm-Up:</strong> 5–10 minutes light cardio & dynamic stretches.
          </li>
          <li>
            <strong>Sets & Reps:</strong> 4–5 sets of 6–8 reps for compound lifts; 3 sets of 8–12 for accessories.
          </li>
          <li>
            <strong>Rest:</strong> 2–3 minutes between heavy sets; 60–90s for accessory movements.
          </li>
        </ul>
      </section>

      {/* Lower‐Body Strength */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lower‐Body Strength</h2>
        <ol className="list-decimal list-inside space-y-6 text-lg">
          {/* Exercise 1 */}
          <li>
            <h3 className="font-semibold">Back Squat</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Barbell across traps, grip wide; feet shoulder-width.
              </li>
              <li>
                <strong>Descent:</strong> Push hips back, bend knees until thighs parallel.
              </li>
              <li>
                <strong>Ascent:</strong> Drive through heels and mid-foot, keep chest up.
              </li>
              <li>
                <strong>Benefit:</strong> Develops maximal quad and glute force for jump power.
              </li>
            </ul>
          </li>

          {/* Exercise 2 */}
          <li>
            <h3 className="font-semibold">Romanian Deadlift</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Hold barbell at hip level, feet hip-width.
              </li>
              <li>
                <strong>Descent:</strong> Hinge at hips, maintain slight knee bend, lower bar to mid-shin.
              </li>
              <li>
                <strong>Ascent:</strong> Drive hips forward, squeeze glutes at top.
              </li>
              <li>
                <strong>Benefit:</strong> Strengthens hamstrings and posterior chain—key for landing stability.
              </li>
            </ul>
          </li>

          {/* Exercise 3 */}
          <li>
            <h3 className="font-semibold">Bulgarian Split Squat</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Rear foot on bench, front foot ~2 ft away.
              </li>
              <li>
                <strong>Descent:</strong> Lower until front thigh parallel; knee tracks toes.
              </li>
              <li>
                <strong>Ascent:</strong> Push through front heel to stand.
              </li>
              <li>
                <strong>Benefit:</strong> Unilateral leg strength, corrects left/right imbalances.
              </li>
            </ul>
          </li>

          {/* Exercise 4 */}
          <li>
            <h3 className="font-semibold">Calf Raise</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Stand on block with heels hanging off edge.
              </li>
              <li>
                <strong>Execution:</strong> Raise heels as high as possible; lower until deep stretch.
              </li>
              <li>
                <strong>Benefit:</strong> Builds calf strength for explosive ankle drive.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Upper‐Body Strength */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upper‐Body Strength</h2>
        <ol className="list-decimal list-inside space-y-6 text-lg">
          {/* Exercise 1 */}
          <li>
            <h3 className="font-semibold">Bench Press</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Lie flat, bar over eyes, feet planted.
              </li>
              <li>
                <strong>Descent:</strong> Lower bar to mid-chest, elbows at ~75°.
              </li>
              <li>
                <strong>Press:</strong> Drive bar upward explosively.
              </li>
              <li>
                <strong>Benefit:</strong> Develops chest, shoulder, and tricep power for strong arm swings.
              </li>
            </ul>
          </li>

          {/* Exercise 2 */}
          <li>
            <h3 className="font-semibold">Pull-Up</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Overhand grip, hands slightly wider than shoulders.
              </li>
              <li>
                <strong>Pull:</strong> Drive chin over bar, retract scapula.
              </li>
              <li>
                <strong>Lower:</strong> Controlled descent to full hang.
              </li>
              <li>
                <strong>Benefit:</strong> Strengthens lats, upper back—supports overhead movements.
              </li>
            </ul>
          </li>

          {/* Exercise 3 */}
          <li>
            <h3 className="font-semibold">Overhead Press</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Barbell at collarbone, grip just outside shoulders.
              </li>
              <li>
                <strong>Press:</strong> Drive bar overhead, locking arms out.
              </li>
              <li>
                <strong>Lower:</strong> Controlled descent to start position.
              </li>
              <li>
                <strong>Benefit:</strong> Builds shoulder and tricep strength—critical for consistent setting and hitting.
              </li>
            </ul>
          </li>

          {/* Exercise 4 */}
          <li>
            <h3 className="font-semibold">Bent-Over Row</h3>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <strong>Setup:</strong> Hinge at hips, slight bend in knees, barbell hanging.
              </li>
              <li>
                <strong>Pull:</strong> Pull bar to lower ribs, squeeze shoulder blades.
              </li>
              <li>
                <strong>Lower:</strong> Return under control.
              </li>
              <li>
                <strong>Benefit:</strong> Balances pressing muscles, improves posture and arm swing control.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Core & Accessory */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core & Accessory Work</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <strong>Hanging Leg Raise</strong> (3×12) – Hang from bar, raise legs to 90°,
            strengthens hip flexors & lower abdominals for jump tuck.
          </li>
          <li>
            <strong>Plank Variations</strong> (3×45s) – Front/side planks build deep core
            stability for movement control under fatigue.
          </li>
          <li>
            <strong>Face Pulls</strong> (3×15) – Cable/elastic band row to face level,
            protects shoulder health and posture.
          </li>
        </ul>
      </section>

      {/* Cool-Down & Mobility */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cool-Down & Mobility</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Hamstring Stretch:</strong> Seated reach or standing toe touch,
            hold 30s each side.
          </li>
          <li>
            <strong>Thoracic Extension:</strong> Foam roll or hands-on-wall arch to open chest.
          </li>
          <li>
            <strong>Hip Flexor Stretch:</strong> Low lunge tilt pelvis posteriorly 30s per side.
          </li>
        </ul>
      </section>

      {/* Final Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Final Execution Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            Maintain strict form on heavy lifts—safety and correct muscle recruitment matter most.
          </li>
          <li>
            Track loads and reps in a training log to ensure progressive overload.
          </li>
          <li>
            Aim for a small weekly increase (2–5 lbs) once you can complete all reps with perfect form.
          </li>
        </ul>
      </section>
    </div>
  );
}
