import React from 'react';

function Mypage ({onLogout} : any){
    var userName;
    if(window.localStorage.getItem('userName')){
        userName=window.localStorage.getItem('userName');
    }
    else{
        userName="에러";
    }

    return (
        <div>
            <p>{userName}님 환영합니다</p>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    );
}

export default Mypage;