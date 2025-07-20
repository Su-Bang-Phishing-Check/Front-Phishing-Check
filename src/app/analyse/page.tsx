'use client';
import { useState } from 'react';

const Analyse = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/analyse/text`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      }
    );

    const data = await res.json();
    setResult(data);
  };
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-y-6">
      <h1 className="text-2xl font-bold">사기 문자 분석</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="내용을 입력하세요"
        className="flex flex-col items-center justify-center bg-white border-3 border-[#CEE3FF] p-4 my-4 mx-2 rounded-lg shadow-sm text-black w-[450px] h-[200px]"
      />
      <button
        onClick={handleSubmit}
        className="w-[180px] h-[50px] text-base	rounded-[10px] px-4 py-2 bg-[#3177ff] text-white hover:bg-[#005ce6] transition-colors duration-200"
      >
        분석하기
      </button>
      {result && (
        <div className="bg-white border-3 border-[#CEE3FF] p-4 rounded-lg shadow-sm text-black w-[450px] h-[200px]">
          <h2 className="text-lg font-semibold">분석 결과</h2>
          <p>{JSON.stringify(result, null, 2)}</p>
        </div>
      )}
    </div>
  );
};
export default Analyse;
