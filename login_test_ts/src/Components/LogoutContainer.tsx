import React,{useContext} from 'react';
import Store from '../Store/store';
import MyPage from './MyPage';

const LogoutContainer : React.FC =() =>{
    const useLogout=useContext(Store);
    return (
        <MyPage onLogout={useLogout.onLogout}/>
    )
} 
export default LogoutContainer;