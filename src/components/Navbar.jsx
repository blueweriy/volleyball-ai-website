import { Link } from "react-router-dom";

export default function Navbar() {
  // Inline styles
  const headerStyle = {
    backgroundColor: "#fff",
    borderBottom: "1px solid #e5e7eb",
    // position: "sticky",   ← removed
    // top: 0,               ← removed
    // zIndex: 50,           ← removed
  };
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
  };
  const linkStyle = {
    margin: "0 2rem",
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#000",
    textDecoration: "none",
  };

  // Final ordered list
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
          <Link key={to} to={to} style={linkStyle}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
