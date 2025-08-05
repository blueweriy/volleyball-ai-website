import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Text Logo on far left */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          VolleyballAI
        </Link>

        {/* Center nav links */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/"         className="text-gray-900 hover:text-gray-700">Home</Link></li>
          <li><Link to="/analysis" className="text-gray-900 hover:text-gray-700">Analysis</Link></li>
          <li><Link to="/callouts" className="text-gray-900 hover:text-gray-700">Callouts</Link></li>
          <li><Link to="/purchases"className="text-gray-900 hover:text-gray-700">Purchases</Link></li>
          <li><Link to="/rules"    className="text-gray-900 hover:text-gray-700">Rules</Link></li>
          <li><Link to="/skills"   className="text-gray-900 hover:text-gray-700">Skills</Link></li>
          <li><Link to="/workout"  className="text-gray-900 hover:text-gray-700">Workout</Link></li>
        </ul>
      </nav>
    </header>
);
}
