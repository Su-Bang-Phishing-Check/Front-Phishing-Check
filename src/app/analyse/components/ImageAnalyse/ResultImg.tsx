import { imageResponse } from './ImageAnalyse';

interface ResultImgProps {
  result: imageResponse | null;
}
const ResultImg = ({ result }: ResultImgProps) => {
  return (
    <div className="result-box">
      {result ? (
        <div className="text-black">
          <h2 className="text-lg font-semibold">분석 결과</h2>
          {result.data.map((item) => (
            <div key={item.image_idx}>
              <p>{item.image_idx + 1}번 이미지</p>
              <p>
                사기 여부:{' '}
                {item.isScam
                  ? '🚨 사기 문자입니다.'
                  : '✅ 정상적인 문자입니다.'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">분석 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default ResultImg;
