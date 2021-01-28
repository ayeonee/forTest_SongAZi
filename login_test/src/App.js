import React from "react";
import {LoginProvider} from './Store/store';
//import LoginProvider from './Components/LoginProvider';
import LoginHOC from './Components/LoginHOC';

const App = () =>{
  
  return (
    <LoginProvider>
      <div>
        <LoginHOC/>
      </div>
    </LoginProvider>
  );
};

export default App;