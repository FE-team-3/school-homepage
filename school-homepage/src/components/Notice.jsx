import React from "react";

const notices = [
    {
    title: "2025학년도 2학기 개강일 안내",
    date: "2025-04-26",
    },
    {
    title: "동아리 모집 일정 공지",
    date: "2025-03-02",
    },
    {
    title: "중간고사 시험 시간표 공지",
    date: "2025-05-20",
    },
    {
    title: "학교 축제 일정 확정 (2025 무비페스타)",
    date: "2025-09-05",
    },
    {
    title: "2025년 여름방학 일정 안내",
    date: "2025-08-01",
    },
    {
    title: "교내 해커톤 참가 신청 안내",
    date: "2025-08-15",
    }
];

function Notice() {
    const today = new Date();

    const sortedNotices = [...notices].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">공지사항</h1>
        <ul className="space-y-2">
            {sortedNotices.map((notice, index) => {
            const noticeDate = new Date(notice.date);
            const isFuture = noticeDate > today;

            return (
            <li key={index} className="border-b pb-2">
                <span className="text-lg">
                {isFuture && "🔥 "}
                {notice.title}
                </span>
                <div className="text-sm text-gray-500">{notice.date}</div>
            </li>
            );
        })}
        </ul>
    </div>
    );
}

export default Notice;
