import { useEffect, useState } from "react";
import io from "socket.io-client";
import Compose from "../components/Chat-Comonents/compose";
import MessageWindow from "../components/Chat-Comonents/message-window";
import UserWindow from "../components/Chat-Comonents/user-window";
import "../components/Chat-Comonents/Chat.css";

const testUsers = [
  {
    name: "Ben",
    isLoggedIn: true,
    active: true,
  },
  {
    name: "Pam",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Justin",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Lucas",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Andrew",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "10Ten10",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "9Nine9",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Zebra",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Dog",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Cat",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "House",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Little Johny",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Dicky",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Tinkly",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "nintendo64",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Mario",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Luigi",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Isabell",
    isLoggedIn: true,
    active: false,
  },
  {
    name: "Jo",
    isLoggedIn: true,
    active: false,
  },
];

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
      console.log("Received Message:", message);
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
      console.log("Sending message:", message);
      socket.emit("send message", message);
    }
  };

  const activeUser = testUsers.find((user) => user.active);

  return (
    <>
      <div className="chat-grid">
        <UserWindow users={testUsers} />
        <MessageWindow
          messages={messages}
          users={testUsers}
          activeUser={activeUser}
        />
        <Compose
          onSendMessage={handleSendMessage}
          users={testUsers}
          activeUser={activeUser}
        />
      </div>
    </>
  );
}

export default Chat;
