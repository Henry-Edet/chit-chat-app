import Message from "./Message";
import UseGetMessages from "./../../hooks/UseGetMessages";
import MessageSkeleton from "./../../components/skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import UseListenMessages from "../../hooks/UseListenMessages";

const Messages = () => {
  const { messages, loading } = UseGetMessages();
  UseListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
