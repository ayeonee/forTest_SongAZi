import React from 'react';
import GoogleLogout from 'react-google-login';

const Logout = ({logged, onLogout}) => {
    
    console.log(logged);
    const logout = onLogout();

    console.log("로그아웃 되었습니다");
   <GoogleLogout
        clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
        bottonText="Logout"
        onLogoutSuccess={logout}>
    </GoogleLogout> 

}


export default Logout;