import React from 'react';
import styled from 'styled-components';
import HistoryBox from '../../components/Mypage/HistoryBox/HistoryBox';
import * as S from './Dashboard.style';

export default function Dashboard() {
  return (
    <S.DashboardContainer>
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
          <S.StartBtn>Sign Up</S.StartBtn>
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
