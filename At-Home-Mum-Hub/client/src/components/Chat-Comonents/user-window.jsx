/* eslint-disable react/prop-types */
import "./Chat.css";

function UserWindow({ users }) {
  return (
    <div className="UserWindow">
      <h2 className="channel-title">Edventurers Online</h2>
      <ul className="user-list">
        {users
          .filter((user) => user.isLoggedIn)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user, index) => (
            <li key={index} className="user">
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UserWindow;
