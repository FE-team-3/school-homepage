import React from "react";
import "./home.css"

function Home() {
    const Notices = [
        "📌 오늘은 6교시 수업까지 진행됩니다.",
        "📢 학사일정이 변경되었습니다. 자세한 사항은 공지사항을 확인하세요.",
        "⛅ 금일 야외 수업이 예정되어 있습니다. 체육복 착용 권장!",
        "📎 신입생 오리엔테이션은 다음 주 월요일입니다.",
        "🚫 급식실 일부 메뉴는 품절될 수 있습니다.",
        "📅 오늘은 도서관 자습실이 22시까지 운영됩니다.",
        "✅ 학생회 선거 투표는 이번 주 금요일까지입니다."
    ];
    const randomNotice = Notices[Math.floor(Math.random() * Notices.length)];

    return (
        <>
            <div className="background">
                <div className={'bg-overlay'}>
                    <div className={'nav'}>
                    <nav>
                        <img src="https://apply.gbsw.hs.kr/src/newImage/logo-text.png" className="logo"/>
                    </nav>
                    </div>
                    <div className={'main'}>
                        <h1>{randomNotice}</h1>
                        <button id="btn" onClick={() => {
                            window.location.href = 'https://school.gyo6.net/gbsw/main.do?sysId=gbsw';
                        }}>
                            더 알아보기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;