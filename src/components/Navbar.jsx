import { Link } from "react-router-dom";
import logo from "../assets/logo.png";  // ← put your logo in src/assets/

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo on far left */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Centered nav links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="text-sm font-medium text-gray-900 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analysis" className="text-sm font-medium text-gray-900 hover:text-gray-700">
              Analysis
            </Link>
          </li>
          <li>
            <Link to="/callouts" className="text-sm font-medium text-gray-900 hover:text-gray-700">
              Callouts
            </Link>
          </li>
          <li>
            <Link to="/rules" className="text-sm font-medium text-gray-900 hover:text-gray-700">
              Rules
            </Link>
          </li>
          {/* add more pages as needed */}
        </ul>

        {/* Optional right‐side icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search">🔍</button>
          <button aria-label="Cart">🛒</button>
        </div>
      </nav>
    </header>
  );
}
