import Image from 'next/image';
import React from 'react';

interface ChatBotMessageProps {
  question: string;
  option: string[];
  onSelectOprion: (option: string) => void;
}

const ChatBotMessage = ({
  question,
  options,
  onSelectOption,
}: ChatBotMessageProps) => {
  return <div></div>;
};

export default ChatBotMessage;
