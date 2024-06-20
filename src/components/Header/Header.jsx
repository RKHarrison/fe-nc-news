import UserCard from "../UserCard/UserCard";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <h1>NC News</h1>
      <UserCard/>
    </section>
  );
};

export default Header;

