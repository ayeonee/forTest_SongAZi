import {useState, useEffect} from 'react';
import style from "./Login.module.scss";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import { signIn } from './auth';

interface IUser{
  userId : string,
  userName : string,
  provider : string
}

function Login(){

  const [userInfo, setUserInfo]=useState<IUser>({
    userId : "",
    userName : "",
    provider : "",
  });

  const responseGoogle = (response : any)=>{
    setUserInfo(
      {
        userId : response.googleId,
        userName : response.profileObj.name,
        provider : "google",
      }
    );
    console.log("success google login");
    signIn(userInfo.userId);
  }


  const responseKakao = (response : any) => {
    setUserInfo(
      {
        userId : response.profile.id,
        userName : response.profile.properties.nickname,
        provider : "kakao",
      }
    );
    console.log("success kakao login");
  }

  console.log(userInfo);

  useEffect(()=>{
    if(userInfo!.userId){
      window.localStorage.setItem('userId',userInfo!.userId);
      window.localStorage.setItem('userName',userInfo!.userName);
      window.localStorage.setItem('provider',userInfo!.provider);
    }
  },[userInfo])

  const responseFail=()=>{
    console.error();
  }
  return (
      <>
          <GoogleLogin
            clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
            render={renderProps => (
              <button className={style.GoogleBtn} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <span className={style.GoogleIcon}></span>
                <div className={style.GoogleText}>구글로 로그인하기</div>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseFail}
          />
          <KakaoLogin
            token="d61079c156018c7a8055d9a015191dfa"
            render={renderProps => (
              <button className={style.KakaoBtn} onClick={renderProps.onClick}>
                <span className={style.KakaoIcon}></span>
                <span className={style.KakaoText}>카카오로 로그인하기</span>
              </button>
            )}
            onSuccess={responseKakao}
            onFail={responseFail}
          />
      </>
    );
}

export default Login;