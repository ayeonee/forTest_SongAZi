import React,{useState} from 'react';
import LoginContainer from './Components/LoginContainer';
import Store from './Store/store';

const App : React.FC =() => {
  const [logged, setLogged]=useState(false);

  const onLogin=()=>{
    setLogged(true);
  }

  const onLogout =()=>{
    setLogged(false);
    window.localStorage.clear();
  }

  const value={
    logged, onLogin, onLogout
  };


  return (
    <Store.Provider value={value}>
      <LoginContainer/>
    </Store.Provider>
  );
}

export default App;
