import Compose from "../components/Chat-Comonents/compose";
import MessageWindow from "../components/Chat-Comonents/message-window";
import UserWindow from "../components/Chat-Comonents/user-window";
import "../components/Chat-Comonents/Chat.css";

function Chat() {
  return (
    <>
      <div className="chat-grid">
        <UserWindow />
        <MessageWindow />
        <Compose />
      </div>
    </>
  );
}

export default Chat;
