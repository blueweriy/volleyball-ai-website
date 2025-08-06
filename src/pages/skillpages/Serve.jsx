// src/pages/skillpages/Serve.jsx
import React from "react";

export default function Serve() {
  return (
    <div className="bg-white text-gray-900 py-16 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto leading-relaxed">
      {/* Smooth scrolling */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Page Title */}
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
        Serving: Rules & Techniques
      </h1>

      {/* Official Serving Rules */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Serving Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li><strong>Service Zone:</strong> Serve from behind the end line, inside sidelines.</li>
          <li><strong>Foot Fault:</strong> Do not step on or over the end line until after contact.</li>
          <li><strong>Clean Hit:</strong> Must strike the ball—no catching or throwing.</li>
          <li><strong>In Bounds:</strong> Ball must clear the net and land inside opponent’s court (line counts).</li>
          <li><strong>Rotation Order:</strong> Serve in correct rotation—out-of-turn is a fault.</li>
        </ul>
      </section>

      {/* Serve Setup Diagram */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Serve Setup Diagram</h2>
        <img
          src="/assets/serve_setup.png"
          alt="Serve stance and toss diagram"
          className="w-full rounded-lg shadow-md mb-4"
        />
        <p className="text-center text-gray-600 italic text-sm">
          Figure: Proper stance, toss point, and contact area.
        </p>
      </section>

      {/* Video Tutorial */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Watch & Learn</h2>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/rn5OKVKXvLc"
            title="Volleyball Serving Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: Basic volleyball serve breakdown.
        </p>
      </section>

      {/* Serve Techniques */}
      {[
        {
          title: "Underhand Serve",
          description: "Ideal for beginners or precise ball placement.",
          steps: [
            "Hold the ball in non-dominant hand at waist height, palm facing up.",
            "Stand with feet shoulder-width apart; non-dominant foot forward.",
            "Swing dominant arm in a pendulum motion; contact ball with heel of hand.",
            "Strike lower half of ball, brushing forward to generate lift.",
            "Follow-through arm upward and step forward slightly.",
          ],
        },
        {
          title: "Overhand Serve",
          description: "Power serve with overhand toss and wrist snap.",
          steps: [
            "Toss ball 1–2 ft above hitting shoulder, slightly forward.",
            "Cock elbow high, hand open behind head.",
            "Step forward with opposite foot as you swing arm over top.",
            "Contact center of ball with palm, driving through net.",
            "Follow-through across body; land balanced.",
          ],
        },
        {
          title: "Float Serve",
          description: "No-spin serve that “floats” unpredictably.",
          steps: [
            "Use overhand toss and arm path.",
            "Contact ball squarely in center with stiff wrist; avoid spin.",
            "Aim for a seam to disturb airflow and enhance float.",
            "Keep follow-through minimal to prevent spin.",
          ],
        },
        {
          title: "Jump Serve",
          description: "High-powered serve combining jump with topspin or float.",
          steps: [
            "Use a 2–3 step approach to build momentum.",
            "Toss ball 2–3 ft above reach, slightly forward.",
            "Jump explosively; eyes locked on ball.",
            "Swing arm over top; snap for topspin or stiffen for float.",
            "Land inside end line ready to defend.",
          ],
        },
      ].map(({ title, description, steps }) => (
        <section key={title} className="mb-12">
          <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
          <p className="mb-4 text-lg">{description}</p>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
