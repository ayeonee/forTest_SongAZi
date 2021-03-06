import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

const Login = ({onLogin}) => {
  const [userInfo, setUserInfo]=useState([]);
  
  const responseGoogle = (response)=>{
    setUserInfo(
      {
        id:userInfo.length,
        userId : response.googleId,
        userName : response.profileObj.name,
        provider : "google",
        accessToken :response.accessToken,
      }
    );
    console.log("success google login");
    onLogin();
  }


  const responseKakao = (response) => {
    setUserInfo({
        id:userInfo.length,
        userId : response.profile.id,
        userName : response.profile.properties.nickname,
        provider : "kakao",
        accessToken : response.response.access_token
    }
    );
    console.log("success kakao login");
    onLogin();
  }

  const responseFail=(err)=>{
    console.error(err);
  }

  useEffect(()=>{
    if(userInfo.userId){
      window.localStorage.setItem('id',userInfo.id);
      window.localStorage.setItem('userId',userInfo.userId);
      window.localStorage.setItem('userName',userInfo.userName);
      window.localStorage.setItem('provider',userInfo.provider);
    }
    console.log(localStorage);
  },[userInfo])
  
  
  return(
    <LoginContainer>
      <Container>
        <ContainerTop>
          <h1>Welcome To MEEMO!</h1>
        </ContainerTop>
        <ContainerBody>
            <GoogleLogin
              clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
              render={renderProps => (
                <GoogleBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <GoogleIcon/>
                  <GoogleText>구글로 로그인하기</GoogleText>
                </GoogleBtn>
              )}
              onSuccess={responseGoogle}
              onFailure={responseFail}
              redirectUri="http://localhost:3000/"
            />
            <KakaoLogin
              token="d61079c156018c7a8055d9a015191dfa"
              render={renderProps => (
                <KakaoBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <KakaoIcon/>
                  <KakaoText>카카오로 로그인하기</KakaoText>
                </KakaoBtn>
              )}
              onSuccess={responseKakao}
              onFail={responseFail}
              onLogout={console.info}
            />
        </ContainerBody>
      </Container>
    </LoginContainer>
  );
  
};

const GoogleBtn = styled.div`
  display: inline-block;
  margin : 5px;
  background: white;
  color: #444;
  width: 220px;
  border-radius: 3px;
  border: none;
  white-space: nowrap;
  &:hover {
    cursor : pointer;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const GoogleIcon=styled.span`
  background: url('./logoImg/g-logo.png') transparent 5px 50% no-repeat;
  background-size : 60%;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
  margin-left : 7px;
`;

const GoogleText=styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 30px;
  font-size: 14px;
  font-weight: bold;
`;

const KakaoBtn = styled.div`
  display: inline-block;
  margin : 5px;
  background: #FEE500;
  color: #000000;
  width: 220px;
  border: none;
  border-radius: 3px;
  white-space: nowrap;
  &:hover {
    cursor : pointer;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const KakaoIcon=styled.span`
  background: url('./logoImg/k-logo.png') transparent 5px 50% no-repeat;
  background-size : 60%;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
  margin-left : 7px;
`;

const KakaoText=styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 22px;
  font-size: 14px;
  font-weight: bold;
`;

const LoginContainer = styled.div`
  width : 100vw;
  height: 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Container = styled.div`
  border : 2px solid grey;
  width: 300px;
  height: 500px;
  background-color :beige;
`;

const ContainerTop = styled.div`
  background-color: white;
  border: none;
  text-align:center;
  background-color :beige;
`;

const ContainerBody = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
  flex-direction:column;
`;



export default Login;