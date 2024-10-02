import React from 'react'
import '../scss/Footer.scss';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer_container">
            <div className="footer">
                <div className="footer_logo">
                <img src="/images/Group 3.png" style={{ color: "white", marginLeft: "50px" }} alt="Logo" />
                </div>
                <div className="footer_content">
                <div className="footer_content_1">
                    <a href="#">회사소개</a>
                    <a href="#">| 이용약관</a>
                    <a href="#">| 개인정보취급방침</a>
                    <a href="#">| 이메일무단수집거부</a>
                    <a href="#">| 고객센터</a>
                </div>
                <div className="footer_content_2">
                    <a href="#">상호명 : 원티드</a>
                    <a href="#">| 주소 : 서울특별시 강남구 819 3 삼오빌딩 5-8층</a>
                </div>
                <div className="footer_content_3">
                    <a href="#">Tel : 010-1234-5678</a>
                    <a href="#">| E-mail : bitcamp502@bitcamp.com</a>
                </div>
                <div className="footer_content_4">
                    <a href="#">송주헌</a>
                    <a href="#">| 조장호</a>
                    <a href="#">| 안용현</a>
                    <a href="#">| 이충현</a>
                    <a href="#">| 이주성</a>
                    <a href="#">| 김영우</a>
                </div>
                <div className="footer_content_5">
                    <a href="#">2024. WANTED All pictures cannot be copied without permission.</a>
                </div>
                </div>
            </div>
            <div className="borderline">
                <div className="topgray"></div>
                <div className="bottomgray"></div>
            </div>
            <div className="footer_icons">
                <img src="/images/Group 8.png" alt="Icons" />
            </div>
        </div>
    </div>
  )
}

export default Footer