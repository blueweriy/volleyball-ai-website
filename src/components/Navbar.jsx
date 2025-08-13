// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  const items = [
    ["Home", "/"],
    ["Rules", "/rules"],
    ["Callouts", "/callouts"],
    ["Skills", "/skills"],
    ["Analysis", "/analysis"],
    ["Workout", "/workout"],
    ["Purchases", "/purchases"],
  ];

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#e5e7eb", // gray-200
        borderBottom: "1px solid #d1d5db", // gray-300
      }}
    >
      <nav style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 16px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.75rem",           // spacing between links
            padding: "18px 0",        // taller bar
            listStyle: "none",
            margin: 0,
          }}
        >
          {items.map(([label, to]) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#374151",   // gray-700
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}
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
