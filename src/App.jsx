import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';

// Placeholder empty pages (to avoid errors)
const Rules = () => <div className="p-8">Rules Page</div>;
const Callouts = () => <div className="p-8">Callouts Page</div>;
const Skills = () => <div className="p-8">Skills Page</div>;
const Workout = () => <div className="p-8">Workout Page</div>;
const Purchases = () => <div className="p-8">Purchases Page</div>;

function App() {
  return (
    <Router>
      <header className="bg-white shadow fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* "AVC" clickable title */}
          <NavLink to="/" className="text-3xl font-extrabold text-gray-900">
            AVC
          </NavLink>

          {/* Navigation buttons */}
          <nav className="flex space-x-6">
            {[
              { to: '/rules', label: 'Rules' },
              { to: '/callouts', label: 'Callouts' },
              { to: '/skills', label: 'Skills' },
              { to: '/workout', label: 'Workout' },
              { to: '/purchases', label: 'Purchases' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-semibold transition ${
                    isActive
                      ? 'bg-yellow-400 text-white'
                      : 'text-gray-700 hover:bg-yellow-300 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content area with padding top so header doesn't overlap */}
      <main className="pt-20 max-w-6xl mx-auto px-6 pb-12 bg-white min-h-screen text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/callouts" element={<Callouts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;