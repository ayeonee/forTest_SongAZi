import React from 'react';
import {LoginConsumer} from '../Store/store';
import MyPage from './MyPage';

const LogoutContainer =()=>(
    <LoginConsumer>
        {(value) =>(
            <MyPage onLogout={()=>value.onLogout()}/>
            )
        }
    </LoginConsumer>
)

export default LogoutContainer;