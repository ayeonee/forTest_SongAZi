import React from 'react';
import {LoginConsumer} from '../Store/store';
import Login from './Login';

const LoginContainer : React.FC =() =>{
    return (
    <LoginConsumer>
        {(value)=>(
            <Login {...value.onLogin()}/>
        )
        }
    </LoginConsumer>
    )
} 

export default LoginContainer;