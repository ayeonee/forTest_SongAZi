import React from 'react';
import Store from '../Store/store';
import Login from './Login';

const LoginContainer =()=>(
    <Store.Consumer>
        {(value) =>(
            <Login
            logged={value.logged} 
            onLogin={value.onLogin}/>
        )
        }
    </Store.Consumer>
)

export default LoginContainer;