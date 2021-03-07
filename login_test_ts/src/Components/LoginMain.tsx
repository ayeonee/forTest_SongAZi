import React from 'react';
import LoginContainer from './LoginContainer';
import LogoutContainer from './LogoutContainer';

function LoginMain({logged} : any){
    if(logged){
        return <LogoutContainer/>;
    }
    else{
        return <LoginContainer/>
    }
};

export default LoginMain;