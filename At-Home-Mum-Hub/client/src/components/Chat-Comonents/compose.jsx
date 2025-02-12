import "./Chat.css";

function Compose() {
  return (
    <div className="Compose">
      <textarea
        className="message"
        placeholder="Please type a message..."
      ></textarea>
      <button className="chat-send-btn">SEND MESSAGE</button>
    </div>
  );
}

export default Compose;
