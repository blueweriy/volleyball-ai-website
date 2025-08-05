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

        {/* Now the links sit right next to it */}
        <ul className="flex space-x-8">
          {[
            ["Home", "/"],
            ["Analysis", "/analysis"],
            ["Callouts", "/callouts"],
            ["Purchases", "/purchases"],
            ["Rules", "/rules"],
            ["Skills", "/skills"],
            ["Workout", "/workout"],
          ].map(([label, to]) => (
            <li key={to}>
              <Link
                to={to}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 no-underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
