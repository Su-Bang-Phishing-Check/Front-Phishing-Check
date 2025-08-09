import { useState } from 'react';
import Link from 'next/link';

interface GetPageRequest {
  pageNo: number;
}

interface GetPageResponse {
  pageNo: number;
  totalPage: number;
  dataCount: number;
  data: [
    {
      id: number;
      title: string;
      link: string;
      DATE_FORMAT: string;
    },
  ];
}

interface NoticeType {
  id: number;
  title: string;
  link: string;
  date: string;
}

const GetPageNotice = () => {
  const [pageNo, setPageNo] = useState(1);
  const [notices, setNotices] = useState<NoticeType[]>([]);
  const [totalPage, setTotalPage] = useState(1);

  const fetchNotices = async () => {
    const body: GetPageRequest = { pageNo };
    if (pageNo > totalPage) {
      console.error('페이지 번호가 총 페이지 수를 초과했습니다.');
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/notice/pageNotice`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      console.error('공지사항 조회 실패');
      return;
    }
    const data: GetPageResponse = await res.json();
    setTotalPage(data.totalPage);
    setNotices(
      data.data.map((it) => ({
        id: it.id,
        title: it.title,
        link: it.link,
        date: it.DATE_FORMAT,
      }))
    );
  };

  return (
    <div>
      {notices.length > 0 ? (
        <ul>
          {notices.map((notice) => (
            <div key={notice.id} className="mb-4">
              {notice.title}
            </div>
          ))}
        </ul>
      ) : (
        <p>공지사항이 없습니다.</p>
      )}
    </div>
  );
};

export default GetPageNotice;
