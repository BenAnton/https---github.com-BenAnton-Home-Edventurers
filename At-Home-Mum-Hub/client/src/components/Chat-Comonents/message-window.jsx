/* eslint-disable react/prop-types */
import "./Chat.css";

function MessageWindow({ messages, activeUser }) {
  return (
    <div className="MessageWindow">
      {messages && messages.length > 0 ? (
        messages.map((message, index) => (
          <div
            key={index}
            className={`displayed-message ${
              message.sender === activeUser.name
                ? "message-sent"
                : "message-received"
            }`}
          >
            <div className="message-sender">{message.sender}</div>
            <div className="message-received">{message.text}</div>
          </div>
        ))
      ) : (
        <div className="no-messages">Start the conversation...</div>
      )}
    </div>
  );
}

export default MessageWindow;
