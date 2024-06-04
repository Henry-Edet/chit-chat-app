import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import UseConversation from "../zustand/UseConversation";

const UseListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = UseConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default UseListenMessages;
