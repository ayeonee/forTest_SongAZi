import React from 'react';
//import {LoginConsumer} from '../Store/store';
import LoginContainer from './LoginContainer';
import LogoutContainer from './LogoutContainer';


const LoginMain = ({logged}) =>{
    if(logged){
        return <LogoutContainer/>;
    }
    else{
        return <LoginContainer/>
    }

};

export default LoginMain;