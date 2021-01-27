import React from 'react';
import withLogin from './LoginHOC';

const Mypage = ()=>{
    return (
        <div>
            내글 보기 시간표 등등,,,
        </div>
    );
}

export default withLogin(Mypage);