import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">K-Pop Concerts</h1>

      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="auth-buttons">
        <NavLink to="/login" className="btn btn-outline">Login</NavLink>
        <NavLink to="/register" className="btn btn-solid">Register</NavLink>
      </div>
    </header>
  );
}

export default Header;