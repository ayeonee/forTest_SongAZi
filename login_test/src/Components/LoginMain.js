import React from 'react';
import {LoginConsumer} from '../Store/store';
import LoginContainer from './LoginContainer';
import MyPage from './MyPage';


const withLogin = () =>{
    return(
        <LoginConsumer>
            { ({state}) => {
                if(state.logged===false)
                    return <LoginContainer/>
                else
                    return <MyPage/>
            }}
        </LoginConsumer>
    );
};

export default withLogin;