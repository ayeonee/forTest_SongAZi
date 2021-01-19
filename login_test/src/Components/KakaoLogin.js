// import React, {Component}  from 'react';
// import SDK from './KakaoSDK';

// class Login extends Component{
//     componentDidMount(){
//         window.Kakao.Auth.createLoginButton({
//             container: '#kakao-login-btn',
//             success: function(authObj) {
//                 // 로그인 성공시, API를 호출합니다.
//                 window.Kakao.API.request({
//                     url: '/v2/user/me',
//                     success: function(res) {
//                     alert(JSON.stringify(res));
//                     },
//                     fail: function(error) {
//                     alert(JSON.stringify(error));
//                     }
//                 });
//             },
//             fail: function(err) {
//                 alert(JSON.stringify(err));
//             }
//         })
//     }

//     constructor(props){
//         super(props);
//     }
      
//     render() {
//         return (
//             <SDK>
//                 <script>
//                     window.Kakao.init('d61079c156018c7a8055d9a015191dfa');
//                 </script>
//                 <a id="kakao-login-btn" href="javascript:loginWithKakao()">
//                 <img
//                     src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
//                     width="222"
//                 />
//                 </a>
//             </SDK>
//         );
//     };
// }

// export default Login;