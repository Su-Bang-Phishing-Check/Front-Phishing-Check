"use client";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";

const ManualPage = () => {
  const LinkExternal = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:underline mt-1"
    >
      {label}
      <HiExternalLink className="ml-1" />
    </a>
  );

  const LinkInternal = ({ href, label }: { href: string; label: string }) => (
    <Link href={href}>
      <span className="inline-flex items-center text-blue-600 hover:underline mt-1">
        {label}
        <HiExternalLink className="ml-1" />
      </span>
    </Link>
  );
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-[900px] flex flex-col gap-y-4 py-2">
        <h1 className="text-2xl font-bold text-left text-[#3177FF]">
          보이스피싱 피해 대처방법
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          보이스피싱 전화 또는 문자를 받은 경우, <br className="md: hidden" />
          사기범에게 이체·송금, 개인정보를 제공한 경우
          <br />
          또는 악성앱이 설치되어 정보유출이 우려되는 경우 다음과 같이 대응해야
          합니다.
        </p>
      </div>
      <section>
        <div>
          <h1>
            1. 입금 금융회사 또는 송금 금융회사 콜센터에 즉시 전화하여 피해신고
            및 계좌 지급정지 신청{" "}
          </h1>
          <p>
            <LinkInternal
              label="(금융회사 전화번호 모음)"
              href="/contact-book"
            />
          </p>
        </div>
        <div>
          <h1>
            2. 신분증, 계좌정보, 카드정보 등 개인정보가 유출되거나 유출 의심이
            되는 경우, 수상한 URL접속으로 악성앱 설치가 의심되는 경우 다음
            절차대로 신속 조치
          </h1>
          <p>정보 유출된 휴대전화나 PC가 아닌 다른 휴대전화나 PC 사용 권장</p>
          <ul>
            <li>
              개인정보 노출 사실 등록
              <p></p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ManualPage;
