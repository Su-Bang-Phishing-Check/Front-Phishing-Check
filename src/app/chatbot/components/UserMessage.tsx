interface UserMessageProps {
  text: string[];
}

const UserMessage = ({ text }: UserMessageProps) => {
  const date = new Date();
  const formattedData = date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex flex-col items-end gap-x-2">
      <p className="text-sx md:text-sm text-gray-500">
        {formattedData}
      </p>
      <div
        className="text-sm md:text-base text-white bg-gray-800
      p-2 rounded-lg shadow-md pl-6 pr-4"
      >
        {text.join(',\n')}
      </div>
    </div>
  );
};

export default UserMessage;
