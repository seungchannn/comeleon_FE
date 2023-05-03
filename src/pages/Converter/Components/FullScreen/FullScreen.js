import React from 'react';
import * as S from './FullScreen.styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CloseIcon from '@mui/icons-material/Close';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

export default function FullScreen({ closeModal, inputText, response }) {
  const handleCloseClick = () => {
    closeModal();
  };

  return (
    <S.FullScreen>
      <S.Left>
        <pre>
          <code>{inputText}</code>
        </pre>
      </S.Left>
      <S.Right>
        <S.Footer>
          <S.CloseButton onClick={handleCloseClick}>
            <CloseFullscreenIcon />
          </S.CloseButton>
        </S.Footer>
        <S.Pre>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {inputText}
          </SyntaxHighlighter>
        </S.Pre>
      </S.Right>
    </S.FullScreen>
  );
}
