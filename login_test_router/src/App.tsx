import React, {useState} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
//import {AuthRoute} from "./Components/AuthRoute"
import { signIn } from './Components/auth';
import Login from './Components/Login';
import Mypage from './Components/MyPage';

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

  const authenticated = Boolean(user.userId); //인증여부 저장
  console.log(authenticated);

  const login = (userId : string) => setUser(signIn(userId));
  const logout = () =>
    setUser({
      userId : "",
      userName : "",
      provider : ""
    });

  return (
    <div>
      {authenticated ? <Redirect to="/mypage"/> : <Redirect to ="/" />}
      <Switch>
        {/* <Route render={()=><Login login={login} authenticated={authenticated}/>} path="/" exact />
        <AuthRoute 
          authenticated={authenticated}
          exact
          path = "/mypage"
          render={(props : any)=><MyPage user={user} logout={logout} {...props}/>}
        /> */}
        <Route render={()=><Login login={login}/>} path="/" exact />
        <Route render={()=><Mypage user={user} logout={logout}/>} path="/mypage" exact />
      </Switch>
    </div>
  );
}

export default App;
