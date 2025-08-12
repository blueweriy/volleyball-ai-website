import { Link } from "react-router-dom";

export default function Navbar() {
  const items = [
    ["VAC", "/"],
    ["Rules", "/rules"],
    ["Callouts", "/callouts"],
    ["Skills", "/skills"],
    ["Analysis", "/analysis"],
    ["Workout", "/workout"],
    ["Purchases", "/purchases"],
  ];

  return (
    <header className="bg-gray-200 border-b border-gray-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="flex justify-center items-center gap-10 py-4"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {items.map(([label, to]) => (
            <li key={to}>
              <Link
                to={to}
                className="text-gray-700 hover:text-gray-900 font-semibold text-lg"
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
