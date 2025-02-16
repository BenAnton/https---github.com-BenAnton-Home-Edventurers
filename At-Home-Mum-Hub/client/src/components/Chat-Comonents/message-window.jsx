/* eslint-disable react/prop-types */
import "./Chat.css";

const user = "Pam";

function MessageWindow({ messages }) {
  return (
    <div className="MessageWindow">
      {messages.map((message, index) => (
        <div key={index} className="message">
          {user} : {message}
        </div>
      ))}
    </div>
  );
}

export default MessageWindow;
