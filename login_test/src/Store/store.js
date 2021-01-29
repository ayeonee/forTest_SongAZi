import React, {useState, useEffect} from 'react';
const Store=React.createContext({
    logged:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

const LoginProvider=({children})=>{
    const [logged, setLogged]=useState(false);

    const onLogin=()=>{
        setLogged(current => !current);
    }
      
    const onLogout=()=>{
        setLogged(current=>!current);
    }

    useEffect(()=>{
        console.log(logged);
    },[logged]);

    const value={
        logged, onLogin, onLogout
    };

    return (
        <Store.Provider value={value}>{children}</Store.Provider>
    );
};
const {Consumer: LoginConsumer}=Store;
export {LoginProvider, LoginConsumer};

export default Store;