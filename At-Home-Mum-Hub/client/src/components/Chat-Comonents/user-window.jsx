import "./Chat.css";

const Testusers = [
  {
    name: "Ben",
    isLoggedIn: true,
  },
  {
    name: "Pam",
    isLoggedIn: true,
  },
  {
    name: "Justin",
    isLoggedIn: true,
  },
  {
    name: "Lucas",
    isLoggedIn: true,
  },
];

function UserWindow() {
  return (
    <div className="UserWindow">
      <h2>Edventurers Online</h2>
      <ul className="user-list">
        {Testusers.filter((user) => user.isLoggedIn).map((user, index) => (
          <li key={index} className="user">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserWindow;
