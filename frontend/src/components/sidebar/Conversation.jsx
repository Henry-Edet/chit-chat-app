import Conversations from "./Conversations";
import UseGetConversations from "../../hooks/UseGetConversations";
import { getRandomEmoji } from "../../utils/Emojis";

const Conversation = () => {
  const { loading, conversations } = UseGetConversations();
  console.log("CONVERSATION", conversations);
  return (
    <div className="flex flex-col py-2 overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversations
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversation;
