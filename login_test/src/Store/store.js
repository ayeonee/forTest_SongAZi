import React from 'react';
const Store=React.createContext({
    logged:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

// const LoginProvider=({children})=>{
//     console.log("머리");

//     const id=window.localStorage.getItem("id");

//     useEffect(()=>{
//         console.log(id);
//         if(!id){
//             console.log("a");
//             onLogin();
//         }
//         else{
//             console.log("b");
//             onLogout();
//         }
//     },[id]);

// };


const {Consumer: LoginConsumer}=Store;
export {LoginConsumer};

export default Store;