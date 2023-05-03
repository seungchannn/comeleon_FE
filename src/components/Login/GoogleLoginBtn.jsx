// import React from 'react';
// import {
//   GoogleLogin,
//   GoogleOAuthProvider,
//   useGoogleLogin,
// } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
// import * as S from './GoogleLoginBtn.style';

// const GoogleLoginBtn = () => {
//   const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
//   // const login = useGoogleLogin({
//   //   onSuccess: credentialResponse => {
//   //     console.log('로그인성공!', credentialResponse);

//   //     const decodeding = jwt_decode(credentialResponse.credential);
//   //     console.log(decodeding);
//   //   },
//   // });

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//     <GoogleLogin
//       type="standard"
//       onSuccess={handleLoginSuccess}
//       theme="filled_blue" //파란색 하고싶은경우 적용하기
//         shape="circle"
//         text="signin_with"
//         size="medium"
//         cancel_on_tap_outside="true"
//       onFailure={(err) => {
//         console.log('로그인실패', err);
//       }}
//     />
//   </GoogleOAuthProvider>
//     // <GoogleOAuthProvider clientId={clientId}>
//     //   <GoogleLogin
//     //     type="standard"
//     //     onSuccess={credentialResponse => {
//     //       console.log('로그인성공!', credentialResponse);
//     //       // const decodeding = jwt_decode(credentialResponse.credential);
//     //       // console.log(decodeding);
//     //     }}
//     //     theme="filled_blue" //파란색 하고싶은경우 적용하기
//     //     shape="circle"
//     //     text="signin_with"
//     //     size="medium"
//     //     cancel_on_tap_outside="true"
//     //     onFailure={err => {
//     //       console.log('로그인실패', err);
//     //     }}
//     //   />
//     // </GoogleOAuthProvider>
//   );
// };
// export default GoogleLoginBtn;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginBtn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const navigate = useNavigate('/');

  const handleLoginSuccess = credentialResponse => {
    console.log('로그인성공!', credentialResponse);
    postCredential(credentialResponse, token);
    navigate('/');
  };

  const token = localStorage.getItem('token');

  const postCredential = credentialResponse => {
    fetch('http://172.30.1.41:3310/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(credentialResponse),
      credentials: 'include',
    }).then(res => {
      console.log('결과', res);
      console.log('토큰', token);
    });
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        type="standard"
        onSuccess={handleLoginSuccess}
        theme="filled_blue"
        shape="circle"
        text="signin_with"
        size="medium"
        cancel_on_tap_outside="true"
        onFailure={err => {
          console.log('로그인실패', err);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginBtn;
