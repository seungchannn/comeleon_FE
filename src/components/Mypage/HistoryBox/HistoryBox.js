import React from 'react';
import styled from 'styled-components';
import * as S from './HistoryBox.style';

export default function HistoryBox() {
  return (
    <S.HistoryBox>
      <S.HistoryIconBoxRed>
        <S.HistoryIconRed
          alt="convert"
          src={process.env.PUBLIC_URL + '/images/history_convertIcon.svg'}
        />
      </S.HistoryIconBoxRed>
      <S.HistroyTextWrapper>
        <S.HistoryTitle>Node.js to Python</S.HistoryTitle>
        <S.HistoryDate>24 Sep 2019, Friday</S.HistoryDate>
      </S.HistroyTextWrapper>
    </S.HistoryBox>
  );
}
