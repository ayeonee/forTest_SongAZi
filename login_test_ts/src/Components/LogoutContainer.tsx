import React from 'react';
import Store from '../Store/store';
import MyPage from './MyPage';

const LogoutContainer : React.FC =() =>{
    return (
    <Store.Consumer>
        {(value)=>(
            <MyPage {...value.onLogout}/>
        )
        }
    </Store.Consumer>
    )
} 
export default LogoutContainer;