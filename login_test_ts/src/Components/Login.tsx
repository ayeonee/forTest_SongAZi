import React, {useState, useEffect} from 'react';
import style from "./Login.module.scss";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';

const Login : React.FC<>=({})=>{
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
            />
            <KakaoLogin
              token="d61079c156018c7a8055d9a015191dfa"
              render={renderProps => (
                <button className={style.KakaoBtn} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <span className={style.KakaoIcon}></span>
                  <span className={style.KakaoText}>구글로 로그인하기</span>
                </button>
              )}
            />
        </>
    );
}