import React, { useEffect } from 'react';
import GoogleLoginBtn from './GoogleLoginBtn';
import * as S from './Login.style';

const Login = () => {
  // useEffect(() => {
  //   fetch('http://172.30.1.41:3000/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: '1',
  //     credentials: 'include',
  //   });
  // }, []);

  const closeLoginModal = () => {
    console.log('닫기');
  };
  return (
    <S.LoginPage>
      <S.LoginContainer>
        <S.CloseLoginDiv>
          <S.CloseLoginBox
            onClick={() => {
              closeLoginModal();
            }}
            src="./images/closeImg.png"
            alt="닫기"
          />
        </S.CloseLoginDiv>
        <S.LoginTitle>Welcome to floor8</S.LoginTitle>
        <S.LoginHr />
        <GoogleLoginBtn />
      </S.LoginContainer>
    </S.LoginPage>
  );
};

export default Login;
