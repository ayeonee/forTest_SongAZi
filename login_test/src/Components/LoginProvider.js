import React, {useState} from 'react';
import Store from '../Store/store';
import LoginHOC from "./LoginHOC";

const LoginProvider = () =>{
    const [logged, setLogged] = useState(false);
  
    const onLogin=()=>{
        setLogged(true);
    }
    
    const onLogout=()=>{
        setLogged(false);
    }

    const value={logged, onLogout,onLogin}
    return (
     <div>
       <Store.Provider value={value}>
        <LoginHOC/>
       </Store.Provider>
     </div>
    );
  };


export default LoginProvider;

