import { Link } from "react-router-dom";

export default function Navbar() {
  // Styles
  const headerStyle = {
    backgroundColor: "#e5e7eb", // Tailwind's gray-200
    borderBottom: "1px solid #d1d5db", // gray-300
  };
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
  };
  const linkStyle = {
    margin: "0 1.5rem", // even spacing
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#374151", // gray-700
    textDecoration: "none",
    transition: "color 0.2s ease",
  };
  const linkHoverStyle = {
    color: "#111827", // gray-900
  };

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
    <header style={headerStyle}>
      <nav style={navStyle}>
        {items.map(([label, to]) => (
          <Link
            key={to}
            to={to}
            style={linkStyle}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, linkHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.target.style, linkStyle)
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
