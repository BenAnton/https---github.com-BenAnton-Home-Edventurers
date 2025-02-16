import { useEffect, useState } from "react";
import io from "socket.io-client";
import Compose from "../components/Chat-Comonents/compose";
import MessageWindow from "../components/Chat-Comonents/message-window";
import UserWindow from "../components/Chat-Comonents/user-window";
import "../components/Chat-Comonents/Chat.css";

const socket = io("http://localhost:5050", {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

function Chat() {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
      setConnected(true);
    });

    socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
      setConnected(false);
    });

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("message");
    };
  }, []);

  const handleSendMessage = (message) => {
    if (connected) {
      socket.emit("send message", message);
    }
  };

  return (
    <>
      <div className="chat-grid">
        <UserWindow />
        <MessageWindow messages={messages} />
        <Compose onSendMessage={handleSendMessage} />
      </div>
    </>
  );
}

export default Chat;
