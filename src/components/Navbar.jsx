import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex p-4 bg-white shadow">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/analysis" className="mr-4">Analysis</Link>
      <Link to="/rules" className="mr-4">Rules</Link>
      <Link to="/skills">Skills</Link>
    </nav>
  );
}
