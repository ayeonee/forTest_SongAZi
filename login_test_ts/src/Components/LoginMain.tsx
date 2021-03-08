import React, {useContext} from 'react';
import Store from '../Store/store';
import Login from './Login';
import MyPage from './MyPage';

function LoginMain({logged} : any){
    const useValue=useContext(Store);
    if(logged){
        return <MyPage onLogout={useValue.onLogout}/>
    }
    else{
        return <Login onLogin={useValue.onLogin}/>;
    }
};

export default LoginMain;