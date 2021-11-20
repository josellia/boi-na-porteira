import React from "react";
import { useSelector } from "react-redux";
import Message from "../Message";
import "./styles.css";

const Messages = () => {
  const { messages } = useSelector((state) => state.layout);

  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
};

export default Messages;
