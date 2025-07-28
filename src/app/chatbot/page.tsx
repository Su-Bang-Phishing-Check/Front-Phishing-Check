import ChatHeader from './components/ChatHeader';

const ChatbotPage = () => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <ChatHeader />
      <section className="flex-1 w-full overflow-y-auto p-4 space-y-4 bg-white"></section>
    </div>
  );
};

export default ChatbotPage;
