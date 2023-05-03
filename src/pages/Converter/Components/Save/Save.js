import React from 'react';
import * as S from './Save.styled';
import SaveIcon from '@mui/icons-material/Save';

export default function Save() {
  return (
    <S.SaveContainer>
      <S.Header>Save your codes</S.Header>
      <S.TitleInput placeholder="Title of codes" />
      <S.Contents>
        <S.InputText>
          <S.Language>zz</S.Language>
        </S.InputText>
        <S.OutputText>
          <S.Language>zz</S.Language>
        </S.OutputText>
      </S.Contents>
      <S.Footer>
        <S.FooterButton>
          <SaveIcon />
        </S.FooterButton>
      </S.Footer>
    </S.SaveContainer>
  );
}
