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
            <h3>Click the icon to login</h3>
            <FaUser className="avatar-placeholder" />
          </div>
        ) : (
          <>
            <h3>News for {user.name}</h3>
            <img src={user.avatar_url} className="user-thumbnail" />
            <button onClick={() => setUser({})}>Logout</button>
          </>
        )}
      </section>
    </>
  );
};

export default UserCard;
