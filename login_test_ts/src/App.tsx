import React,{useState} from 'react';
import LoginMain from './Components/LoginMain';
import Store from './Store/store';

const App : React.FC =() => {
  const [logged, setLogged]=useState<boolean>(Boolean(localStorage.getItem('userId')));
  console.log(logged);

  const onLogin = () => {
    setLogged(true);
  }
  const onLogout = () => {
    setLogged(false);
    window.localStorage.clear();
  }
  const value={
    logged,
    onLogin,
    onLogout
  };

  return (
    <Store.Provider value={value}>
      <LoginMain logged={logged}/>
    </Store.Provider>
  );
}

export default App;
