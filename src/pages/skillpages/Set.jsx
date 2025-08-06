// src/pages/skillpages/Set.jsx
import React from "react";

export default function Set() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 lg:px-20 max-w-4xl mx-auto leading-relaxed">
      {/* Smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <h1 className="text-4xl font-serif font-bold mb-6 text-center">
        Setting: Rules & Technique
      </h1>

      {/* Setting Basics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Official Setting Rules</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Clean Contact:</strong> Hands must form a “triangle” or “window”; ball rebounds cleanly, no spin.
          </li>
          <li>
            <strong>Double Contact:</strong> If two hands make contact at different times, it’s a fault (except on hard-driven balls).
          </li>
          <li>
            <strong>Lift/Catch:</strong> Ball must not come to rest or be carried.
          </li>
        </ul>
      </section>

      {/* Technique */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Setting Technique</h2>
        <ol className="list-decimal list-inside space-y-2 leading-relaxed">
          <li>
            <strong>Hand Position:</strong> Thumbs and index fingers form a triangle; wrists firm, hands slightly behind the ball.
          </li>
          <li>
            <strong>Body Alignment:</strong> Square shoulders to target; bend knees to get under the ball.
          </li>
          <li>
            <strong>Contact:</strong> Push through the ball with legs and arms, extending fully—no scooping.
          </li>
          <li>
            <strong>Follow Through:</strong> Arms finish forward and upward toward your target.
          </li>
        </ol>
      </section>
    </div>
  );
}
