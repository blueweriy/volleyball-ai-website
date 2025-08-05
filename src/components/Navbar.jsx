import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-start h-16 px-4 space-x-12">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 hover:text-gray-700 no-underline"
        >
          VolleyballAI
        </Link>

        {/* Navigation links */}
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/analysis"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Analysis
            </Link>
          </li>
          <li>
            <Link
              to="/callouts"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Callouts
            </Link>
          </li>
          <li>
            <Link
              to="/purchases"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Purchases
            </Link>
          </li>
          <li>
            <Link
              to="/rules"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Rules
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/workout"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
            >
              Workout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
);
}
