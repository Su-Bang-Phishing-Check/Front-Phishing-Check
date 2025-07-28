import React from "react";

interface ChatBotMessageProps {
  question: string;
  option: string[];
  onSelectOption: (option: string) => void;
}

const ChatBotMessage = () => {
  return (
    <div>
      <div>
        <img
          src="/assets/bot.png"
          alt="Bot"
          className="w-8 md:w-10 h-8 md:h-10 rounded-full"
        />
        <span></span>
      </div>
    </div>
  );
};

export default ChatBotMessage;
