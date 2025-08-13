"use client";
import { useRouter } from "next/navigation";
import { FiUpload } from "react-icons/fi";

const MessageBanner = () => {
  const router = useRouter();
  const handleBannerClick = () => {
    router.push("/analyse");
  };

  return (
    <div
      onClick={handleBannerClick}
      className="cursor-pointer 
      flex items-center justify-center 
      bg-white p-4 text-black 
      w-full h-[150px] md:h-[200px]
      border-3 border-blue-100 rounded-xl
      hover:shadow-md active:scale-95 transition-transform"
    >
      <div className="w-1/2 p-3">
        <div className="text-lg font-semibold">문자 내용 분석</div>
        <div className="text-sm md:text-base text-left mt-2">
          <span style={{fontWeight: "bold"}}>문자 화면</span> 및 <span style={{fontWeight: "bold"}}>내용</span>을 통해
          <br />
          <span style={{fontWeight: "bold", color: "#3177FF"}}>AI</span>로 위험도를 분석합니다.
        </div>
      </div>
      <div
        className="w-1/4 p-3
      flex items-center justify-center"
      >
        <FiUpload className="w-12 h-12 text-[#3177ff]" />
      </div>
    </div>
  );
};

export default MessageBanner;
