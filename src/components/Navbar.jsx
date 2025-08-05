import { Link } from "react-router-dom";
import logo from "../assets/logo.png";  // your actual logo filename

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        {/* Center nav */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-gray-900">Home</Link></li>
          <li><Link to="/analysis" className="text-gray-900">Analysis</Link></li>
          <li><Link to="/callouts" className="text-gray-900">Callouts</Link></li>
          <li><Link to="/purchases" className="text-gray-900">Purchases</Link></li>
          <li><Link to="/rules" className="text-gray-900">Rules</Link></li>
          <li><Link to="/skills" className="text-gray-900">Skills</Link></li>
          <li><Link to="/workout" className="text-gray-900">Workout</Link></li>
        </ul>
      </nav>
    </header>
  );
}
