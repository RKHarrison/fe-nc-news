import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" id="home" to="/">Latest News</Link>
      <Link className="nav-link" to="/coding">Coding</Link>
      <Link className="nav-link" to="/football">Football</Link>
      <Link className="nav-link" to="/cooking">Cooking</Link>
    </nav>
  );
};

export default Nav;
