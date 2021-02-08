import React from 'react';
const Store=React.createContext({
    logged:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

const {Consumer: LoginConsumer}=Store;
export {LoginConsumer};

export default Store;