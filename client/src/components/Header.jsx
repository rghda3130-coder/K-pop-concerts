import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>K-Pop Concerts</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;