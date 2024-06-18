import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">Latest</Link>
    </nav>
  );
};

export default Nav;
