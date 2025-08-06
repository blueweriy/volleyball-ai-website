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

      {/* Rules */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold mb-4">Official Serving Rules</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>
            <strong>Service Zone:</strong> Serve from behind the end line, inside the sidelines.
          </li>
          <li>
            <strong>Foot Fault:</strong> Do not step on or over the end line until after contact.
          </li>
          <li>
            <strong>Clean Hit:</strong> You must strike the ball; catching or throwing is a fault.
          </li>
          <li>
            <strong>In Bounds:</strong> The ball must clear the net and land inside opponent’s court (touching the line counts as in).
          </li>
          <li>
            <strong>Rotation Order:</strong> You must serve in the correct rotation—out-of-turn serves are faults.
          </li>
        </ul>
      </section>

      {/* Serve Diagram */}
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
            src="https://www.youtube.com/embed/qZr_7Cnlb_c"
            title="Underhand & Overhand Volleyball Serve Tutorial"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-gray-600 italic text-sm">
          Source: Coach’s volleyball serve breakdown.
        </p>
      </section>

      {/* Serve Techniques */}
      {[
        {
          title: "Underhand Serve",
          description:
            "A controlled serve ideal for beginners and precise placement.",
          steps: [
            "Hold the ball in your non-dominant hand, palm facing up at waist level.",
            "Stand with feet shoulder-width apart; step forward with non-dominant foot.",
            "Swing your dominant arm in a pendulum motion, contacting the ball with the heel of your hand or a closed fist.",
            "Strike the lower half of the ball, brushing forward to generate lift.",
            "Follow through with your arm upward and step forward slightly.",
          ],
        },
        {
          title: "Overhand Serve",
          description:
            "A powerful serve using an overhand toss—great for aggressive play.",
          steps: [
            "Toss the ball 1–2 feet above your hitting shoulder, slightly in front.",
            "Keep your elbow high and arm cocked back in a “C” shape.",
            "Step forward with opposite foot as you swing your arm over the top.",
            "Contact the center of the ball with your palm, driving it to clear the net.",
            "Follow through across your body and land balanced.",
          ],
        },
        {
          title: "Float Serve",
          description:
            "A no-spin serve that “floats” unpredictably—difficult for receivers.",
          steps: [
            "Use the same toss and arm path as an overhand serve.",
            "At contact, hit the ball squarely in the center with a stiff wrist—avoid spin.",
            "Aim for a seam to disturb airflow and enhance float.",
            "Keep follow-through minimal to prevent imparting spin.",
          ],
        },
        {
          title: "Jump Serve",
          description:
            "Combines power and deception with a jump—advanced technique.",
          steps: [
            "Take a 2–3 step approach (e.g., left-right-left for right-handers).",
            "Toss the ball 2–3 feet above reach, slightly forward of your hitting shoulder.",
            "Jump explosively off both feet, eyes tracking the ball.",
            "Swing your arm over, snapping for topspin or stiffening for a float.",
            "Land inside the end line in a ready position.",
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
