import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as S from './HistoryBox.style';

export default function HistoryBox() {
  useEffect(() => {
    fetch('http://192.168.1.127:3310/users/chats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('access_token')}`,
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

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
