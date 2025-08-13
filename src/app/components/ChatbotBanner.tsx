"use client";
import ChatStepIcon from "./ChatStepIcon";
import { useRouter } from "next/navigation";

const ChatbotBanner = () => {
  const router = useRouter();

  const handleChatClick = () => {
    router.push("/chatbot");
  };

  return (
    <div
      onClick={handleChatClick}
      className="cursor-pointer 
      flex flex-col items-center justify-center 
      bg-white p-4 text-black 
      w-full h-[150px] md:h-[200px]
      border-3 border-blue-100 rounded-xl
      hover:shadow-md active:scale-95 transition-transform"
    >
      <div className="text-lg font-semibold">
        상황선택 → 요구사항선택 → 위험도 확인
      </div>
      <div>
        <ChatStepIcon />
      </div>
      <div className="text-sm md:text-base text-center mt-2">
        <span style={{ fontWeight: "bold" }}>
          상황</span> 및 <span style={{ fontWeight: "bold" }}>요구 내용</span>을 통해 
          <span style={{ fontWeight: "bold" }}> 보이스피싱 위험</span>을 알려드립니다. 
      </div>
    </div>
  );
};

export default ChatbotBanner;
