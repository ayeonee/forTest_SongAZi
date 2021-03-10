import React from 'react';
import { Route } from "react-router-dom";
import Login from './Components/Login';
import MyPage from './Components/MyPage';

const App : React.FC =() => {
  return (
    <>
      <Route component={Login} path="/" exact />
      <Route component={MyPage} path="/mypage" />
    </>
  );
}

export default App;
