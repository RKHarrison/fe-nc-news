

import "./UserCard.css";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const UserCard = () => {
  const devUser = {
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  };
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <section className="user-card">
        {!user.username ? (
          <div className="log-in" onClick={() => setUser(devUser)}>
            <h3 className="hover-underline-animation">Log in </h3>
            <FaUser className="avatar-placeholder" />
          </div>
        ) : (
          <>
            <h3>Hi {user.name.split(' ')[0]}</h3>
            <img src={user.avatar_url} className="user-thumbnail" />
            <button className="logout-button" onClick={() => setUser({})}>Log out</button>
          </>
        )}
      </section>
    </>
  );
};

export default UserCard;
