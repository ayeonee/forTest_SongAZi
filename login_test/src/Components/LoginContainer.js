import React from 'react';
import Store from '../Store/store';
import Login from './Login';

const LoginContainer =()=>(
    <Store.Consumer>
        {store =>(
            <Login
            logged={store.logged} 
            onLogin={store.onLogin}/>
        )
        }
    </Store.Consumer>
)

export default LoginContainer;