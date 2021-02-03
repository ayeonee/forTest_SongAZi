import React, {useState} from 'react';
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
        const provider=window.localStorage.getItem('provider');
        console.log(provider);
        if(provider === "google"){
            const auth2=window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(function(){
            console.log('Google Logout');
            });
        }
        else if(provider==='kakao'){
            window.Kakao.Auth.logout(function(){
            console.log("Kakao logout");
            });
        }
        
        window.localStorage.clear();
        setLogged(current=>!current);

    }

    // useEffect(()=>{
    //     const id=window.localStorage.getItem('id');
    //     if(id){
    //         onLogin();
    //     }
    //     else{
    //         onLogout();
    //     }
    // },[]);

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