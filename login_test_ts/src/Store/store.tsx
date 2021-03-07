import {createContext} from 'react';

const Store = createContext({
    logged:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

export default Store;