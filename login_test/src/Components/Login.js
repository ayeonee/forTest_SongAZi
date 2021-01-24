import React, {useState} from 'react';
import styled from "styled-components";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

const Login = ({logged, onLogin}) => {

  const [userInfo, setUserInfo]=useState([]);
  const responseGoogle = (response)=>{
    setUserInfo([
      {
        id:userInfo.length,
        userId : response.googleId,
        userName : response.profileObj.name,
        provider : "google",
      }
    ]);
    onLogin();
  }

  const responseKakao = (response) => {
    setUserInfo([
      {
        id:userInfo.length,
        userId : response.profile.id,
        userName : response.profile.properties.nickname,
        provider : "kakao"
      }
    ]);
    onLogin();
  }

  const responseFail=(err)=>{
    console.error(err);
  }

  console.log(logged);
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
            onFailure={responseFail}
            cookiePolicy={'single_host_origin'}
          />
          <KakaoLogin
            token="d61079c156018c7a8055d9a015191dfa"
            onSuccess={responseKakao}
            onFail={responseFail}
            onLogout={console.info}
            useLoginForm
          />
        </ContainerBody>
      </Container>
    </LoginContainer>
  );
  
};

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

export default Login;