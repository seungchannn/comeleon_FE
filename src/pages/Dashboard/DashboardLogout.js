import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../../components/Login/Login';
import HistoryBox from '../../components/Mypage/HistoryBox/HistoryBox';
import * as S from './DashboardLogout.style';

export default function DashboardLogOut() {
  const [loginModalOn, setLoginModalOn] = useState(false);

  return (
    <S.DashboardContainer>
      {loginModalOn && <Login />}
      <S.LoginWrapper onClick={() => setLoginModalOn(true)}>
        <S.LoginSpan>Log In</S.LoginSpan>
        <S.LoginIcon src={process.env.PUBLIC_URL + `/images/loginIcon.svg`} />
      </S.LoginWrapper>
      <S.TextOverlay>
        <S.TextWrapper>
          <S.MainText>Welcome to Comeleon</S.MainText>
          <S.SubText>
            Did you learn only node js?
            <br />
            Did you learn only functional components?
            <br />
            Welcome on then we will help.
          </S.SubText>
          <S.StartBtn onClick={() => setLoginModalOn(true)}>Sign In</S.StartBtn>
        </S.TextWrapper>
        <S.SuggestionText>Sign in to checkout your history...</S.SuggestionText>
      </S.TextOverlay>
      <S.Gradient />
      <S.HistoryContaienr>
        <HistoryBox />
        <HistoryBox />
      </S.HistoryContaienr>
    </S.DashboardContainer>
  );
}
