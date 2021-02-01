import React from 'react';

const Mypage = ({onLogout})=>{
    return (
        <div>
            <p>마이페이지,,,</p>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    );
}

export default Mypage;