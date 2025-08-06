import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-center space-x-12 px-4">
        {/* Navigation links */}
        {[
          ["VAC", "/"],
          ["Analysis", "/analysis"],
          ["Callouts", "/callouts"],
          ["Purchases", "/purchases"],
          ["Rules", "/rules"],
          ["Skills", "/skills"],
          ["Workout", "/workout"],
        ].map(([label, to]) => (
          <Link
            key={to}
            to={to}
            className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
