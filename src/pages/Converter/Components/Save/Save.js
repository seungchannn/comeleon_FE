import React, { useState } from 'react';
import * as S from './Save.styled';
import SaveIcon from '@mui/icons-material/Save';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Save({
  inputLanguage,
  outputLanguage,
  inputText,
  response,
  onClose,
}) {
  const [title, setTitle] = useState('');
  const ACCESS_TOKEN = localStorage.getItem('access_token');
  const handleSave = () => {
    // 요청 본문 데이터
    const data = {
      ol: inputLanguage,
      cl: outputLanguage,
      inputText,
      outputText: response,
      title,
    };

    // fetch 요청
    fetch(`http://192.168.1.127:3310/openai/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save the data.');
        }
        // 저장 성공 시 처리할 코드 작성
      })
      .catch(error => {
        // 저장 실패 시 처리할 코드 작성
      });
  };

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  return (
    <S.SaveContainer>
      <S.Header>Save your codes</S.Header>
      <S.TitleInput
        placeholder="Title of codes"
        value={title}
        onChange={handleTitleChange}
      />
      <S.Contents>
        <S.InputText>
          <S.Language>{inputLanguage}</S.Language>
          <S.Inner>
            <pre>
              <code>{inputText}</code>
            </pre>
          </S.Inner>
        </S.InputText>
        <S.OutputText>
          <S.Language>{outputLanguage}</S.Language>
          <S.Inner>
            <pre>
              <code>{response}</code>
            </pre>
          </S.Inner>
        </S.OutputText>
      </S.Contents>
      <S.Footer>
        <S.FooterButton onClick={handleSave}>
          <CheckCircleIcon />
        </S.FooterButton>
        <S.FooterButton onClick={onClose}>
          <CancelIcon />
        </S.FooterButton>
      </S.Footer>
    </S.SaveContainer>
  );
}
