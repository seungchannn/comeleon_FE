import React from 'react';
import * as S from './FullScreen.styled';

export default function FullScreen({ closeModal }) {
  const handleCloseClick = () => {
    closeModal();
  };

  return (
    <S.FullScreen>
      <S.Left />
      <S.Right>
        <button onClick={handleCloseClick}>X</button>
      </S.Right>
    </S.FullScreen>
  );
}
