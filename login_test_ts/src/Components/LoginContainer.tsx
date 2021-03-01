import React from 'react';
import {LoginConsumer} from '../Store/store';
import Login from './Login';

const LoginContainer =(): void =>{
    <LoginConsumer>
        {(value)=>(
            <Login onLogin={()=>value.onLogin()}/>
        )
        }
    </LoginConsumer>
} 

export default LoginContainer;