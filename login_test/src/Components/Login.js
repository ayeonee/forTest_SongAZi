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
    console.log("로그인 되었습니다");
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
          <p>간편 로그인</p>
            <GoogleLogin
              clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
              render={renderProps => (
                <GoogleBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <googleIcon/>
                  <googleText>구글로 로그인하기</googleText>
                </GoogleBtn>
              )}
              onSuccess={responseGoogle}
              onFailure={responseFail}
              cookiePolicy={'single_host_origin'}
              img src={process.env.PUBLIC_URL+'/loginImg/google_login.png'}
            />
            <KakaoBtn
              token="d61079c156018c7a8055d9a015191dfa"
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
  background: white;
  color: #444;
  width: 190px;
  border-radius: 12px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const googleIcon=styled.span`
  background: url('https://developers.google.com/identity/images/g-logo.png?hl=ko') transparent 5px 50% no-repeat;
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
`;

const googleText=styled.span`
  display: inline-block;
  vertical-align: middle;
  padding-left: 42px;
  padding-right: 42px;
  font-size: 14px;
  font-weight: bold;
`;

const KakaoBtn = styled(KakaoLogin)`
  margin: 10px;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #000000;
  background-color: #ffe500;
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.2);
  }
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
    justify-content: flex-end;
    align-items: center;
    height: 300px;
    flex-direction:column;
`;



export default Login;