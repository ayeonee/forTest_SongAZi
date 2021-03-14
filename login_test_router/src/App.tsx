import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {AuthRoute} from "./Components/AuthRoute"
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

  const authenticated : boolean = user != null; //인증여부 저장
  console.log(authenticated);

  const login = (userId : string) => setUser(signIn(userId));
  const logout = () => setUser({
    userId : "",
    userName : "",
    provider : ""
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route render={()=><Login login={login}/>} path="/" exact />
        <AuthRoute 
          authenticated={authenticated}
          path = "/mypage"
          render={()=><MyPage user={user}/>}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
