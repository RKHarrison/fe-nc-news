import UserCard from "../UserCard/UserCard";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to='/' className="header-section">
      <h1>NC News</h1>
      <UserCard/>
    </Link>
  );
};

export default Header;

