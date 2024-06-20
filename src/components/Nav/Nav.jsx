import "./Nav.css";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import SortSelect from "../SortBySelect/SortBySelect";
import { useEffect } from "react";

const Nav = () => {

  return (
    <nav>
      <Link className="nav-link" id="home" to="/">
        Latest News
      </Link>
      <Link className="nav-link" to="/coding">
        Coding
      </Link>
      <Link className="nav-link" to="/football">
        Football
      </Link>
      <Link className="nav-link" to="/cooking">
        Cooking
      </Link>
      <SortSelect/>
     
    </nav>
  );
};

export default Nav;
