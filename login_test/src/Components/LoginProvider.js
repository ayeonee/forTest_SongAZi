// import React, {useState} from 'react';
// import Store from '../Store/store';
// import LoginHOC from "./LoginHOC";

// const LoginProvider = (props) =>{
//     const [logged, setLogged] = useState(false);
  
//     const onLogin=()=>{
//       setLogged(!logged);
//     }
    
//     const onLogout=()=>{
//       setLogged(!logged);
//     }

    

//     return (
//      <div>
//        <Store.Provider value={{logged, onLogin, onLogout}}>
//            {props.children}
//         <LoginHOC/>
//        </Store.Provider>
//      </div>
//     );
//   };


// export default LoginProvider;

