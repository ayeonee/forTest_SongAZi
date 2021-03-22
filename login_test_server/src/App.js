import React from "react";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import axios from "axios";

const App = () =>{
    const handleLogin = async googleData => {
        await axios.post("http://localhost:5000/api/users/auth/google",
          {
            tokenId : googleData.tokenId
          }
        )
        .then((res)=>{
          alert(res.data.message);
        }   
        )
    }

    const responseKakao = async response => {
      await axios.post("http://localhost:5000/api/users/auth/kakao",
        {
          accessToken : response.response.access_token
        }
      )
      .then((res)=>{
        alert(res.data.message);
      })
    }
    return(
        <>
        <GoogleLogin
          clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
        <KakaoLogin
          token="d61079c156018c7a8055d9a015191dfa"
          buttonText="Log in with kakao"
          onSuccess={responseKakao}
          onFail={responseKakao}
        />
        </>
    );
};

export default App;