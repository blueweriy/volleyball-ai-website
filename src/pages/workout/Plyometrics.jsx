// src/pages/workout/Plyometrics.jsx
import React from "react";

export default function Plyometrics() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto leading-relaxed">
      {/* Page Title */}
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">
        Plyometrics Program
      </h1>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-lg text-gray-700">
          Plyometric training focuses on explosive movements that stretch your
          muscles (the eccentric phase) immediately followed by a rapid contraction
          (the concentric phase). This “stretch‐shortening cycle” teaches your muscles
          to generate maximal power in minimal time—vital for volleyball skills like
          high jumps, quick lateral drives, and reactive digs.
        </p>
      </section>

      {/* Program Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Program Structure</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Frequency:</strong> 2–3 sessions per week, with at least 48 hours of rest between.
          </li>
          <li>
            <strong>Warm-Up:</strong> 10 minutes of dynamic mobility (leg swings, arm circles, hip openers).
          </li>
          <li>
            <strong>Sets & Reps:</strong> 3–4 sets per exercise, rep range 6–10, focusing on maximal effort.
          </li>
          <li>
            <strong>Rest Intervals:</strong> 60–90 seconds between sets to ensure quality, not fatigue.
          </li>
        </ul>
      </section>

      {/* Drill 1 */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">1. Squat Jumps</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>
            <strong>Setup:</strong> Stand with feet hip-width apart, toes slightly pointed out.
          </li>
          <li>
            <strong>Descent (Eccentric):</strong> Lower into a parallel squat—hips back, chest up,
            thighs at or just below parallel to the floor.
          </li>
          <li>
            <strong>Explode (Concentric):</strong> Swing arms down and then upward as you forcefully
            drive through your heels into a vertical jump.
          </li>
          <li>
            <strong>Airborne Phase:</strong> At peak, extend ankles, knees, and hips fully—reach tall.
          </li>
          <li>
            <strong>Landing:</strong> Absorb by bending knees and hips, keeping weight on mid-foot,
            land softly to minimize joint stress.
          </li>
        </ol>
        <p className="mt-3 text-gray-600 italic text-sm">
          <em>Benefit:</em> Develops explosive concentric strength in the quads and glutes for higher takeoffs.
        </p>
      </section>

      {/* Drill 2 */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">2. Box Depth Jumps</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>
            <strong>Setup:</strong> Stand on a sturdy box (~18″ height) with feet shoulder-width.
          </li>
          <li>
            <strong>Drop (Eccentric):</strong> Step off the box—do not jump forward—land on the ground
            in soft squat position.
          </li>
          <li>
            <strong>Immediate Rebound:</strong> As soon as you feel ground contact, explode upward
            into a vertical jump or onto a second box of equal height.
          </li>
          <li>
            <strong>Landing:</strong> Same soft, bent-knee landing—reset and repeat.
          </li>
        </ol>
        <p className="mt-3 text-gray-600 italic text-sm">
          <em>Benefit:</em> Trains rapid transition from eccentric to concentric muscle action,
          enhancing reactive jump ability and ankle stiffness.
        </p>
      </section>

      {/* Drill 3 */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">3. Lateral Bounds</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>
            <strong>Starting Position:</strong> Stand on one foot near a cone or marker.
          </li>
          <li>
            <strong>Push-Off:</strong> Explosively push off your standing leg laterally—drive
            across your body to land on the opposite foot.
          </li>
          <li>
            <strong>Landing:</strong> Land softly with knee tracking toes, absorb force, then
            immediately bound back.
          </li>
          <li>
            <strong>Repetitions:</strong> Complete the prescribed reps on one side before switching.
          </li>
        </ol>
        <p className="mt-3 text-gray-600 italic text-sm">
          <em>Benefit:</em> Improves lateral power and stability, critical for quick side‐to‐side
          defensive movements.
        </p>
      </section>

      {/* Drill 4 */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">4. Tuck Jumps</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>
            <strong>Setup:</strong> Stand with feet shoulder-width, arms by your sides.
          </li>
          <li>
            <strong>Jump:</strong> Explosively jump up, drawing knees toward chest.
          </li>
          <li>
            <strong>Tuck Hold:</strong> Momentarily hold knees high at peak to emphasize hip flexion.
          </li>
          <li>
            <strong>Landing:</strong> Land softly, bend hips and knees, then reset.
          </li>
        </ol>
        <p className="mt-3 text-gray-600 italic text-sm">
          <em>Benefit:</em> Enhances hip flexor and core engagement, improving knee drive and
          aerial control.
        </p>
      </section>

      {/* Drill 5 */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">5. Single-Leg Hop</h3>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>
            <strong>Start:</strong> Balance on one foot, slight knee bend.
          </li>
          <li>
            <strong>Hop:</strong> Drive through the ankle, knee, and hip to hop forward 2–3 feet.
          </li>
          <li>
            <strong>Balance:</strong> Land on the same foot, stabilize for 1–2 seconds.
          </li>
          <li>
            <strong>Alternate:</strong> Switch legs after completing reps.
          </li>
        </ol>
        <p className="mt-3 text-gray-600 italic text-sm">
          <em>Benefit:</em> Addresses unilateral power and balance, reducing asymmetries.
        </p>
      </section>

      {/* Cool-Down */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cool-Down & Mobility</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Calf Stretch:</strong> Lean against a wall, one foot back with heel down for 30s each side.
          </li>
          <li>
            <strong>Quad Stretch:</strong> Pull foot to glute standing or lying for 30s each side.
          </li>
          <li>
            <strong>Hip Flexor Stretch:</strong> Lunge forward, tilt pelvis posteriorly for 30s each side.
          </li>
        </ul>
      </section>

      {/* Final Tips */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Final Execution Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Maintain full attention—plyometrics require focus on each rep for safety and effectiveness.</li>
          <li>If form deteriorates (e.g., knees collapse), reduce reps or rest longer.</li>
          <li>Log jump heights or distance to track progress over weeks.</li>
        </ul>
      </section>
    </div>
  );
}
