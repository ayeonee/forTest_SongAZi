import React, {useState} from "react";
//import styled from 'styled-components';
import Store from './Store/store';
import LoginContainer from "./Components/LoginContainer";
import LogoutContainer from "./Components/LogoutContainer";

const App = () =>{
  const [logged, setLogged] = useState(false);

  const onLogin=()=>{
    setLogged(true);
  }

  const onLogout=()=>{
    setLogged(false);
  }

  const value={logged, onLogin, onLogout}
  return (
   <div>
     <Store.Provider value={value}>
     {logged ?
        <LogoutContainer/> :
        <LoginContainer/>
      }
     </Store.Provider>
   </div>
  );
};

export default App;