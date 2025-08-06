import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <nav className="relative h-16">
        {/* Logo absolutely at left */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 no-underline"
          >
            VolleyballAI
          </Link>
        </div>

        {/* Centered nav links */}
        <div className="h-16 flex justify-center items-center overflow-x-auto whitespace-nowrap px-4">
          {[
            ["Home", "/"],
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
              className="mx-4 text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
);
}
