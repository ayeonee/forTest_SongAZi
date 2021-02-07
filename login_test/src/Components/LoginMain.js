import React from 'react';
//import {LoginConsumer} from '../Store/store';
import LoginContainer from './LoginContainer';
import LogoutContainer from './LogoutContainer';


const LoginMain = () =>{
    // return(
    //     <LoginConsumer>
    //         { (value) => {
    //             if(value.logged===false)
    //                 return <LoginContainer/>
    //             else
    //                 return <LogoutContainer/>
    //         }}
    //     </LoginConsumer>
    // );
    if(window.localStorage.getItem('id') !== null){
        return <LogoutContainer/>
    }
    else{
        return <LoginContainer/>
    }

};

export default LoginMain;