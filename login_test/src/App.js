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
    // const provider=window.localStorage.getItem('provider');
    // console.log(provider);
    // if(provider === "google"){
    //     const auth2=window.gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function(){
    //     console.log('Google Logout');
    //     });
    // }
    // else if(provider==='kakao'){
    //     window.Kakao.Auth.logout(function(){
    //     console.log("Kakao logout");
    //     });
    // }
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