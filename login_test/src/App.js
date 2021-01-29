import React from "react";
import {LoginProvider} from './Store/store';
//import LoginProvider from './Components/LoginProvider';
import LoginMain from './Components/LoginMain';

const App = () =>{
  
  return (
    <LoginProvider>
      <div>
        <LoginMain/>
      </div>
    </LoginProvider>
  );
};

export default App;