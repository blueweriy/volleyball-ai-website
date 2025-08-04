// src/pages/Callouts.jsx
import React from 'react';

export default function Callouts() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center">📣 Coach Callouts</h1>

      {/* What are Callouts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. What Are Callouts?</h2>
        <p className="mb-2">
          Callouts are short, clear verbal cues coaches or teammates use during play—
          reminding positioning, alerting to threats, or encouraging focus.
        </p>
      </section>

      {/* Defensive Callouts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Defensive Callouts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>"Mine!"</strong> – I will take that ball.</li>
          <li><strong>"Yours!"</strong> – You take it (teammate).</li>
          <li><strong>"Short!"</strong> – Serve/pass is too short—move forward.</li>
          <li><strong>"Back!"</strong> – Ball heading deep—move backward.</li>
        </ul>
      </section>

      {/* Offensive Callouts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Offensive Callouts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>"Swing!"</strong> – Time your attack approach and hit.</li>
          <li><strong>"Set!"</strong> – Setter ready—get into position.</li>
          <li><strong>"Middle!"</strong> – Quick set in the middle position.</li>
          <li><strong>"Line!"</strong> – Attack along sideline.</li>
          <li><strong>"Angle!"</strong> – Cross-court shot.</li>
        </ul>
      </section>

      {/* Blocking Callouts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Blocking Callouts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>"Up!"</strong> – Jump to block now.</li>
          <li><strong>"Tool!"</strong> – Let the ball deflect off your block.</li>
          <li><strong>"Line!"</strong> – Block the line attack.</li>
          <li><strong>"Cross!"</strong> – Block cross-court hit.</li>
        </ul>
      </section>

      {/* Communication Tips */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Communication Tips</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Keep callouts loud and concise—one or two words.</li>
          <li>Use a consistent vocabulary so teammates immediately recognize cues.</li>
          <li>Always call every ball in your zone—avoids collisions.</li>
          <li>Practice callouts in drills until they become automatic.</li>
        </ul>
      </section>

      {/* Example Scenarios */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Example Scenarios</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Short Serve →</strong> Teammate calls “Short!” and moves forward to receive.</li>
          <li><strong>Setter Ready →</strong> Setter calls “Set!” and hitters prepare approach.</li>
          <li><strong>Cross Attack →</strong> Blocker calls “Cross!” to position for cross-court block.</li>
        </ul>
      </section>
    </div>
  );
}
