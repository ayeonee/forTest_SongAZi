import React from 'react';
import { LoginConsumer } from './Store';
import Login from './Components/Login';
import Mypage from './Components/Mypage';

const App = () => {
    return <LoginConsumer>{(value) => (value.isAuth ? <Mypage /> : <Login />)}</LoginConsumer>;
};

export default App;
