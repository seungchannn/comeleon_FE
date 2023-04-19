import React from 'react';
import GoogleLoginBtn from './GoogleLoginBtn';
import * as S from './Login.style';

const Login = () => {
  return (
    <S.LoginPage>
      <S.LoginContainer>
        <S.CloseLoginBox>X</S.CloseLoginBox>
        <S.LoginTitle>Welcome to floor8</S.LoginTitle>
        <S.LoginHr />
        <GoogleLoginBtn />
      </S.LoginContainer>
    </S.LoginPage>
  );
};

export default Login;
