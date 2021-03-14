import React, {useState} from 'react';
import { Route } from "react-router-dom";
import { signIn } from './Components/auth';
import Login from './Components/Login';
import MyPage from './Components/MyPage';

interface User{
  userId : string,
  userName : string,
  provider : string
}

const App : React.FC =() => {
  const [user, setUser]=useState<User>({
    userId : "",
    userName:"",
    provider:""
  });

  const authenticated = user != null; //인증여부 저장

  const login=(userId : string)=>setUser(signIn(userId));
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
