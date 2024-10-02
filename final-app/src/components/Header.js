import React,{useState} from 'react';
import '../scss/Header.scss';

const Header = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='Header'>
            <div className="header_container">
                <div className="header">
                    <img className="cb_icon" src="/images/Group 3.png" alt="icon" />
                    <div className="header_category" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                        <a href="#">특수경매</a>
                        <a href="#">일반경매</a>
                        <a href="#">물품등록</a>
                        <a href="#">마이페이지</a>
                    </div>
                    <div className="header_searchbox">
                        <img src="/images/searchicon.svg" alt="search icon" style={{ marginLeft: '10px', marginTop: '3px' }} />
                        <input
                        type="text"
                        style={{ width: '240px', height: '30px', border: 'none' }}
                        placeholder="검색어를 입력하세요"
                        />
                    </div>
                    <div className="header_category">
                        <a href="#">로그인</a>
                        <a href="#">회원가입</a>
                    </div>
                    <div className="header_noti">
                        <img src="/images/Vector.png" alt="notifications" />
                    </div>
                </div>
            </div>
        
            {isHovered && (
                <div className="header_hovermenu">
                    <div className="hover_category">
                    <table className="hover_table">
                        <tbody>
                        <tr>
                            <th>실시간</th>
                            <th>전체보기</th>
                            <th></th>
                            <th>구매내역</th>
                        </tr>
                        <tr>
                            <th>블라인드</th>
                            <th>선택보기</th>
                            <th></th>
                            <th>판매내역</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>알림내역</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>페이충전</th>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            )};
        </div>
    );
}

export default Header