import React, {useState} from 'react';
import { Route } from "react-router-dom";
import { signIn } from './Components/auth';
import Login from './Components/Login';
import MyPage from './Components/MyPage';

const App : React.FC =() => {
  const [user, setUser]=useState({
    userId : "",
    userName:"",
    provider:""
  });
  const authenticated = user != null;

  const login=(userId : any)=>setUser(signIn(userId));
  const logout = () => setUser({
    userId : "",
    userName : "",
    provider : ""
  });

  return (
    <>
      <Route component={Login} path="/" exact />
      <Route component={MyPage} path="/mypage" />
    </>
  );
}

export default App;
