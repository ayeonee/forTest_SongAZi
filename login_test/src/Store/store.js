import React, {useState} from 'react';
const Store=React.createContext({
    state:{logged:false},
    actions:{
        onLogin:()=>{},
        onLogout:()=>{}
    }
});

const LoginProvider=({children})=>{
    const [logged, setLogged]=useState(false);
    const onLogin=()=>{
        setLogged(!logged);
    }
      
    const onLogout=()=>{
        setLogged(!logged);
    }

    const value={
        state:{logged},
        actions:{onLogin, onLogout}
    };

    return (
        <Store.Provider value={value}>{children}</Store.Provider>
    );
};
const {Consumer: LoginConsumer}=Store;
export {LoginProvider, LoginConsumer};

export default Store;