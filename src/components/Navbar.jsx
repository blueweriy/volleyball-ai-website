import { Link } from "react-router-dom";

export default function Navbar() {
  // Inline styles
  const headerStyle = {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    borderBottom: "1px solid #e5e7eb",
    zIndex: 50,
  };
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "4rem",
  };
  const linkStyle = {
    margin: "0 2rem",        // even spacing
    fontSize: "1.5rem",      // a bit smaller
    fontWeight: 700,         // thicker
    color: "#000",           // solid black
    textDecoration: "none",  // no underline
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
