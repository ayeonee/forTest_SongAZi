import React, {useState,useEffect} from "react";
import Store from './Store/store';
import LoginMain from './Components/LoginMain';


const App = () =>{
  const [logged, setLogged]=useState(Boolean(localStorage.getItem('id')));

  const [test, setTest]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/api')
      .then(res=>res.json())
      .then(data=>setTest({title:data.title}));
  },[])

  const onLogin=()=>{
      setLogged(true);
  }
    
  const onLogout=()=>{
    
    //const provider = window.localStorage.getItem('provider');
    // if(provider === 'google') {
    //   const auth2 = window.gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(function() {
    //     console.log('Google Logout.');
    //   });
    // }
    // else if(provider === 'kakao'){
    //   window.Kakao.Auth.logout(function() {
    //     console.log("Kakao logout");
    //   });
    // }
    setLogged(false);
    window.localStorage.clear();
    
  };

  const value={
    logged, onLogin, onLogout
  };

  return (
  <Store.Provider value={value}>
    <div>{test? <h1>{test.title}</h1>:<h1>loading...</h1>}</div>
    <LoginMain logged={logged}/>
  </Store.Provider>
  );
};

export default App;