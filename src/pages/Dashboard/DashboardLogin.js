import React, { useState } from 'react';
import styled from 'styled-components';
import HistoryBox from '../../components/Mypage/HistoryBox/HistoryBox';
import * as S from './DashboardLogin.style';

export default function DashboardLogIn() {
  return (
    <S.DashboardContainer>
      <S.TextWrapper>
        <S.MainText>Welcome Jang Su Chan</S.MainText>
        <S.SubText>
          Did you learn only node js?
          <br />
          Did you learn only functional components?
          <br />
          Welcome on then we will help.
        </S.SubText>
      </S.TextWrapper>
      <S.Bottom>
        <S.QuickmenuContainer>
          <S.SubTitleText>Quick Menu</S.SubTitleText>
          <S.QuickmenuWrapper>
            <S.QuickmenuButtonConvert>
              <S.QuickmenuIcon
                src={process.env.PUBLIC_URL + `/images/converterIcon.svg`}
              />
              <S.QuickmenuSpan>converter</S.QuickmenuSpan>
            </S.QuickmenuButtonConvert>
            <S.QuickmenuButtonConmment>
              <S.QuickmenuIcon
                src={process.env.PUBLIC_URL + `/images/commentIcon.svg`}
              />
              <S.QuickmenuSpan>comment</S.QuickmenuSpan>
            </S.QuickmenuButtonConmment>
          </S.QuickmenuWrapper>
        </S.QuickmenuContainer>
        <S.HistoryContaienr>
          <S.SubTitleText>History</S.SubTitleText>
          <S.HistoryList>
            <li>
              <HistoryBox />
            </li>
            <li>
              <HistoryBox />
            </li>
            <li>
              <HistoryBox />
            </li>
          </S.HistoryList>
        </S.HistoryContaienr>
      </S.Bottom>
    </S.DashboardContainer>
  );
}
