import React, {useState} from "react";
import Store from './Store/store';
import LoginMain from './Components/LoginMain';


const App = () =>{
  const [logged, setLogged]=useState(Boolean(localStorage.getItem('id')));

  const onLogin=()=>{
      setLogged(true);
  }
    
  const onLogout=()=>{
    setLogged(false);
    window.localStorage.clear();
  };

  const value={
    logged, onLogin, onLogout
  };

  return (
  <Store.Provider value={value}>
    <LoginMain logged={logged}/>
  </Store.Provider>
  );
};

export default App;