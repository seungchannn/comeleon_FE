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

import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginBtn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleLoginSuccess = credentialResponse => {
    console.log('로그인성공!', credentialResponse);
    postCredential(credentialResponse);
  };

  const postCredential = credentialResponse => {
    console.log('dddd', credentialResponse);
    fetch('http://172.30.1.41:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentialResponse),
    });

    // console.log('로그인후 응답', response);

    // if (response.ok) {
    //   const responseText = response.text();
    //   console.log('응답?', responseText);
    //   console.log('성공');
    // } else {
    //   console.log('실패');
    // }
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

//원래코드
// import React, { useEffect } from 'react';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

// const GoogleLoginBtn = () => {
//   const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

//   const handleLoginSuccess = async credentialResponse => {
//     if (credentialResponse) {
//       postCredential(credentialResponse);
//       console.log('로그인성공!담았다!!', credentialResponse);
//     } else {
//       console.log('로그인실패!!!');
//     }
//   };

//   const postCredential = async credentialResponse => {
//     const response = await fetch('http://172.30.1.41:3310/users/login', {
//       method: 'POST',
//       headers: {켜
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(credentialResponse),
//     });

//     if (response.ok) {
//       console.log('자격 증명 전송 성공');
//     } else {
//       console.log('자격 증명 전송 실패');
//     }
//   };

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <GoogleLogin
//         type="standard"
//         onSuccess={handleLoginSuccess}
//         theme="filled_blue"
//         shape="circle"
//         text="signin_with"
//         size="medium"
//         cancel_on_tap_outside="true"
//         onFailure={err => {
//           console.log('로그인실패', err);
//         }}
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleLoginBtn;
