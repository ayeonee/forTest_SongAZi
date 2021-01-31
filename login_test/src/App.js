import React from "react";
import {LoginProvider} from './Store/store';
import LoginMain from './Components/LoginMain';

const App = () =>{

  return (
    <LoginProvider>
        <LoginMain/>
    </LoginProvider>
  );
};

export default App;