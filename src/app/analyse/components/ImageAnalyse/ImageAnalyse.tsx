'use client';
import { useState } from 'react';
import ImageUpload from './ImageUpload';
import AnalyseButton from '../../AnalyseButton';
import AnalyseResult from '../../AnalyseResult';
import Loading from '@/Loading';

const ImageAnalyse = () => {
  const [images, setImages] = useState<File[]>([]);
  const [result, setResult] = useState<null | {
    isScam: boolean;
    score: number;
  }>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (images.length === 0) {
      alert('이미지를 선택해주세요.');
      return;
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });

    setIsLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/analyse/image`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!res.ok) {
      alert('결과값 확인 안됨!');
      return;
    }

    const data = await res.json();
    setResult(data);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[900px] flex flex-col items-center  gap-y-4">
      <ImageUpload image={images} setImage={setImages} />
      <AnalyseButton
        onClick={handleSubmit}
        disabled={images.length === 0}
      />
      <Loading isLoading={isLoading} />
      <AnalyseResult result={result} />
    </div>
  );
};

export default ImageAnalyse;
