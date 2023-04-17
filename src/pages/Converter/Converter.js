import React, { useState } from 'react';
import * as S from './Converter.styled';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LanguageOption from './Components/LanguageOption/LanguageOption';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Converter() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [withComments, setWithComments] = useState(true);
  const [inputLanguage, setInputLanguage] = useState('');
  const [outputLanguage, setOutputLanguage] = useState('');

  const handleInputText = e => {
    setInputText(e.target.value);
  };

  const handleGenerate = e => {
    e.preventDefault();
    const isComment = withComments ? 'true' : 'false';
    fetch(
      `http://172.30.1.36:3310/openai?isComment=${isComment}&ol=${inputLanguage}&cl=${outputLanguage}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText }),
      }
    )
      .then(res => res.json())
      .then(data => {
        setResponse(data.response);
        console.log(data.response);
        alert('가즈아');
      })
      // .finally(() => {
      //   alert('가즈아2');
      // });
      .catch(error => {
        console.error('API 요청 실패:', error);
        alert('망함');
      });
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate(e);
    }
  };

  const handleCheckboxChange = e => {
    setWithComments(e.target.checked);
  };
  return (
    <S.ConverterContainer>
      <S.ConverterLeft>
        <S.Contents>
          <S.Title>Convert your codes</S.Title>
          <S.ContentsHeader>
            <LanguageOption
              inputLanguage={inputLanguage}
              setInputLanguage={setInputLanguage}
              outputLanguage={outputLanguage}
              setOutputLanguage={setOutputLanguage}
            />
          </S.ContentsHeader>
          <S.ContentsInput onSubmit={handleGenerate}>
            <S.Textarea
              value={inputText}
              onChange={handleInputText}
              onKeyDown={handleKeyDown}
              placeholder="코드를 입력하세요"
            />
            <S.ConvertFooter>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      checked={withComments}
                      onChange={handleCheckboxChange}
                    />
                  }
                  label="with comments"
                />
              </FormGroup>
              <Stack spacing={2} direction="row">
                <Button variant="contained" type="submit">
                  Generate
                </Button>
              </Stack>
            </S.ConvertFooter>
          </S.ContentsInput>
        </S.Contents>
      </S.ConverterLeft>
      <S.ConverterRight>{response}</S.ConverterRight>
    </S.ConverterContainer>
  );
}
