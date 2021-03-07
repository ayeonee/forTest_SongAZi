import React,{useContext} from 'react';
import Store from '../Store/store';
import Login from './Login';

const LoginContainer : React.FC =() =>{
    const useLogin=useContext(Store);
    return (
        <Login onLogin={useLogin.onLogin}/>
    )
}

export default LoginContainer;