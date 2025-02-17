/* eslint-disable react/prop-types */
import "./Chat.css";
import { useState } from "react";

function Compose({ onSendMessage, activeUser }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage({ sender: activeUser.name, text: message });
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Compose">
        <textarea
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Please type a message..."
        ></textarea>
        <button className="chat-send-btn" type="submit">
          SEND
        </button>
      </div>
    </form>
  );
}

export default Compose;
