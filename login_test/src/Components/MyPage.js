import React from 'react';

const Mypage = ({onClick})=>{
    return (
        <div>
            <p>마이페이지,,,</p>
            <button onClick={onClick}>로그아웃</button>
        </div>
    );
}

export default Mypage;