import UserCard from "../UserCard/UserCard";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="header-section">
      <Link to="/"><h1>NC News</h1></Link>
      <UserCard/>
    </section>
  );
};

export default Header;



