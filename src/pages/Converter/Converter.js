import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import * as S from './Converter.styled';
import FullScreen from './Components/FullScreen/FullScreen';
import Comment from '../Comment/Comment';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LanguageOption from './Components/LanguageOption/LanguageOption';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Save from './Components/Save/Save';

export default function Converter() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');
  const [withComments, setWithComments] = useState(true);
  const [inputLanguage, setInputLanguage] = useState('');
  const [outputLanguage, setOutputLanguage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const handleInputText = e => {
    setInputText(e.target.value);
  };
  const ACCESS_TOKEN = localStorage.getItem('access_token');

  const handleGenerate = e => {
    e.preventDefault();
    const isComment = withComments ? 'true' : 'false';
    fetch(
      `http://192.168.1.127:3310/openai?isComment=${isComment}&ol=${inputLanguage}&cl=${outputLanguage}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${ACCESS_TOKEN}`,
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

  const handleCopy = e => {
    navigator.clipboard.writeText(inputText);
  };

  const handleFullScreenClick = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveClick = () => {
    setIsSaveModalOpen(true);
  };

  const handleSaveClose = () => {
    setIsSaveModalOpen(false);
  };

  return (
    <>
      {!isModalOpen && !isSaveModalOpen && (
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
          <S.ConverterRight>
            <S.Contents>
              {/* <S.Title /> */}
              <S.ContentsHeader />
              <S.ContentsOutput>
                <S.CodeTitle>
                  <S.CopyIcon onClick={handleCopy} />
                  <div>Copy</div>
                </S.CodeTitle>
                <S.Pre>
                  <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                    {response}
                  </SyntaxHighlighter>
                </S.Pre>
              </S.ContentsOutput>
            </S.Contents>
          </S.ConverterRight>
          <S.Footer>
            <S.FooterButton variant="outlined" onClick={handleFullScreenClick}>
              <FullscreenIcon />
            </S.FooterButton>

            <S.FooterButton onClick={handleSaveClick}>
              <SaveIcon />
            </S.FooterButton>
            <S.FooterButton>
              <CancelIcon />
            </S.FooterButton>
          </S.Footer>
        </S.ConverterContainer>
      )}
      {isModalOpen && (
        <FullScreen
          closeModal={handleCloseModal}
          inputText={inputText}
          response={response}
        />
      )}
      {isSaveModalOpen && (
        <Save
          inputLanguage={inputLanguage}
          outputLanguage={outputLanguage}
          inputText={inputText}
          response={response}
          onClose={handleSaveClose}
        />
      )}
    </>
  );
}
