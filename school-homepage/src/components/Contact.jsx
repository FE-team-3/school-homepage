import React from "react";
import "./Contact.css"

const Contact = () => {
    const hour = new Date().getHours();

    return(
        <>
            <div>
                <div>
                    <ol>
                        <li>학교 주소 : 경상북도 의성군 봉양면 봉호로 14 </li>
                        <li>학교 전화 : 054-832-2903 </li>
                        <li>학교 메일 : merryhunter@naver.com </li>
                        <li>
                            {hour >= 9 && hour < 18 ? '운영 중' : '운영 종료'}
                        </li>
                        <li>학교 주소 : 경상북도 의성군 봉양면 봉호로 14 </li>
                    </ol>
                </div>
                <div>
                    <h3>학교 지도</h3>
                    <img src="https://apply.gbsw.hs.kr/src/newImage/main-bg.png" alt="학교지도" />
                </div>
            </div>
        </>
    )
}

export default Contact;