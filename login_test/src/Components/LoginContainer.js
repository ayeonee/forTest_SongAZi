import React from 'react';
import {LoginConsumer} from '../Store/store';
import Login from './Login';

const LoginContainer =()=>(
    <LoginConsumer>
        {({actions}) =>(
            <Login onLogin={()=>actions.onLogin()} />
        )
        }
    </LoginConsumer>
)

export default LoginContainer;