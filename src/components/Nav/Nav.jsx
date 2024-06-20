import "./Nav.css";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {

  const { topic } = useParams();
  console.log(topic);
  useEffect(()=>{

  },[topic])

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
    </nav>
  );
};

export default Nav;
