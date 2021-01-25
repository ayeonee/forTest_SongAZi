import React from 'react';
import Store from '../Store/store';
import Logout from './Logout';

const LogoutContainer =({logged, onLogout})=>(
    <Store.Consumer>
        {store =>(
            <Logout
                logged={store.logged} 
                onLogout={store.onLogout}/>
            )
        }
    </Store.Consumer>
)

export default LogoutContainer;