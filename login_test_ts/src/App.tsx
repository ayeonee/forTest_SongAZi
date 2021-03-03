import React,{useState} from 'react';
import LoginContainer from './Components/LoginContainer';
import Store from './Store/store';

interface IValue{
  logged : boolean;
  onLogin : Function;
  onLogout : Function;
}

const App : React.FC =() => {
  const [logged, setLogged]=useState(Boolean(localStorage.getItem('id')));

  const onLogin=()=>{
    setLogged(true);
  }

  const onLogout =()=>{
    setLogged(false);
    window.localStorage.clear();
  }

  const value : IValue={
    logged, onLogin, onLogout
  };


  return (
    <Store.Provider value={value}>
      <LoginContainer/>
    </Store.Provider>
  );
}

export default App;
