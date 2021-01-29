import React from 'react';
import {LoginConsumer} from '../Store/store';
import LoginContainer from './LoginContainer';
import MyPage from './MyPage';


const LoginMain = () =>{
    return(
        <LoginConsumer>
            { (value) => {
                if(value.logged===false)
                    return <LoginContainer/>
                else
                    return <MyPage/>
            }}
        </LoginConsumer>
    );
};

export default LoginMain;