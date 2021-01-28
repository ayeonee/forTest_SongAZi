import React from 'react';
import {LoginConsumer} from '../Store/store';
import LoginContainer from './LoginContainer';

const withLogin = (WrappedComponent) =>{
    return(
        <LoginConsumer>
            { ({state}) => {
                if(state.logged===false)
                    return <LoginContainer/>
                else
                    return <WrappedComponent/>
            }}
        </LoginConsumer>
    );
};

export default withLogin;