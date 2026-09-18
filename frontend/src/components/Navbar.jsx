import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="brand" to="/" aria-label="Study Planner home">
        <span className="brand-mark" aria-hidden="true">SP</span>
        <span>Study Planner</span>
      </NavLink>
      <nav aria-label="Main navigation" className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Tasks</NavLink>
      </nav>
    </header>
  )
}

export default Navbar