import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginBtn = ({ setLoginModalOn }) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  const handleLoginSuccess = credentialResponse => {
    console.log('로그인성공!', credentialResponse);
    postCredential(credentialResponse);
    setLoginModalOn(false); // 모달 닫기
  };

  const token = localStorage.getItem('token');

  const postCredential = credentialResponse => {
    fetch('http://192.168.1.127:3310/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(credentialResponse),
      credentials: 'include',
    })
      .then(res => {
        console.log('결과', res);
        console.log('토큰', token);
        return res.json();
      })
      .then(data => {
        console.log('응답', data);
        localStorage.setItem('access_token', data.accessToken);
        window.location.replace('/');
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
