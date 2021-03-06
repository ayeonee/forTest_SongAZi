import React,{useState} from 'react';
import LoginContainer from './Components/LoginContainer';
import Store from './Store/store';
import {IValue} from "./Types";

const App : React.FC =() => {
  const [logged, setLogged]=useState<boolean>(Boolean(localStorage.getItem('id')));

  const value : IValue={
    logged, 
    onLogin:()=>{setLogged(true);}, 
    onLogout:()=>{
      setLogged(false);
      window.localStorage.clear();
    }
  };

  return (
    <Store.Provider value={value}>
      <LoginContainer/>
    </Store.Provider>
  );
}

export default App;
