import React from 'react';
import Store from '../Store';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import axios from 'axios';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const handleLogin = async (googleData) => {
        await axios
            .post('http://localhost:5000/api/users/auth/google', {
                tokenId: googleData.tokenId,
            })
            .then((res) => {
                console.log(res.data);
                setLoginInfo(res.data);
            });
    };

    const responseKakao = async (response) => {
        console.log(response.profile.properties.nickname);
        await axios
            .post('http://localhost:5000/api/users/auth/kakao', {
                accessToken: response.response.access_token,
                userId: response.profile.id,
                userName: response.profile.properties.nickname,
            })
            .then((res) => {
                setLoginInfo(res.data);
            });
    };
    return (
        <Store.Provider value={loginInfo}>
            <GoogleLogin
                clientId="723578906212-p9e6ejvqm6rbbk4d2lo0djvks5j3k530.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
            <KakaoLogin token="d61079c156018c7a8055d9a015191dfa" buttonText="Log in with kakao" onSuccess={responseKakao} onFail={console.error} />
        </Store.Provider>
    );
};

export default Login;
