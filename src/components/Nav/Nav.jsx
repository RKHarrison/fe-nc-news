import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="first-nav-link" id="home" to="/">
        <p>Latest News</p>
      </Link>
      <Link className="nav-link" to="/coding">
        <p>Coding</p>
      </Link>
      <Link className="nav-link" to="/cooking">
        <p>Cooking</p>
      </Link>
      <Link className="nav-link" to="/football">
        <p>Football</p>
      </Link>
    </nav>
  );
};

export default Nav;
