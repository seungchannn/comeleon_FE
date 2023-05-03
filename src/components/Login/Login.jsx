import React, { useEffect } from 'react';
import { motion } from '../../../node_modules/framer-motion/dist/framer-motion';
import GoogleLoginBtn from './GoogleLoginBtn';
import * as S from './Login.style';

const Login = ({ setLoginModalOn, loginModalOn }) => {
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

  return (
    <S.LoginPage>
      <S.LoginContainer
        as={motion.div}
        loginModalOn={loginModalOn}
        initial={{ opacity: 0 }}
        animate={{ scale: [1, 1.5, 1], opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <S.CloseLoginDiv>
          <S.CloseLoginBox
            src="./images/closeImg.png"
            alt="닫기"
            onClick={() => setLoginModalOn(false)}
          />
        </S.CloseLoginDiv>
        <S.LoginTitle>Welcome to floor8</S.LoginTitle>
        <S.LoginHr />
        <GoogleLoginBtn />
      </S.LoginContainer>
      <S.ModalBackground
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </S.LoginPage>
  );
};

export default Login;
