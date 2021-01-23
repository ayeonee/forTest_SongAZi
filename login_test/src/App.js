import React, {useState} from "react";
//import styled from 'styled-components';
import Store from './Store/store';
import LoginContainer from "./Components/LoginContainer";

const App = () =>{
  const [logged, setLogged] = useState(false);

  const onLogin=()=>{
    setLogged(true);
  }

  const onLogout=()=>{
    setLogged(false);
  }

  return (
   <div>
     <Store.Provider value={logged, onLogin, onLogout}>
       <LoginContainer/>
     </Store.Provider>
   </div>
  );
};

export default App;