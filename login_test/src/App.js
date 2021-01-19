import React from 'react';
import styled from "styled-components";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import SDK from './Components/KakaoSDK';


const LoginContainer = styled.div`
  width : 100vw;
  height: 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Container = styled.div`
  border : 2px solid grey;
  width: 600px;
  height: 500px;
`;

const ContainerTop = styled.div`
    background-color: white;
    border: none;
    text-align:center;
`;

const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 300px;
`;

const LoginPage = () =>{
  const responseGoogle = (response)=>{
    console.log(response);
  }

  const responseKakao = (response)=>{
    console.log(response);
  }

  return(
    <LoginContainer>
      <Container>
        <ContainerTop>
          <h1>Welcome To MEEMO!</h1>
        </ContainerTop>
        <ContainerBody>
          <GoogleLogin
            clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
            buttonBox = "GoogleLogin"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          <SDK/>
          <KakaoLogin
            jsKey="d61079c156018c7a8055d9a015191dfa"
            buttonBox = "KakaoLogin"
            onSuccess={responseKakao}
            onFailure={responseKakao}
            cookiePolicy={'single_host_origin'}
          />
          
        </ContainerBody>
      </Container>
    </LoginContainer>
  );
};

export default LoginPage;