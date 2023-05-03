import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { flexCenter } from '../../../../styles/mixin';

export const SaveContainer = styled.div`
  ${flexCenter}
  flex-direction : column;
  width: 100%;
  height: 100vh;
  background-color: #f5f5fb;
`;
export const Header = styled.div`
  ${flexCenter}
  width: 80%;
  height: 10%;
  font-size: 25px;
  /* border: solid 1px black; */
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 50px;
  font-size: 20px;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #c0c0c0;

  &:focus {
    border-bottom: 2px solid #5e81f4;
    outline: none;
  }
`;

export const Contents = styled.div`
  ${flexCenter('space-around', 'center')}
  width: 85%;
  height: 80%;
  /* border: solid 1px black; */
`;
export const InputText = styled.div`
  ${flexCenter}
  flex-direction : column;
  border: solid 1px #c0c0c0;
  border-radius: 10px;
  width: 45%;
  height: 90%;
  background-color: white;
`;

export const OutputText = styled.div`
  ${flexCenter}
  flex-direction : column;
  border: solid 1px #c0c0c0;
  border-radius: 10px;
  width: 45%;
  height: 90%;
  background-color: white;
`;

export const Language = styled.div`
  border: none;
  margin-top: 10px;
  border-bottom: 1px solid #c0c0c0;
  ${flexCenter('flex-start', 'center')}
  width: 90%;
  height: 50px;
  overflow: auto;
`;

export const Inner = styled.div`
  /* border: 1px solid black; */
  margin-top: 20px;
  width: 90%;
  height: 85%;
  overflow: auto;
  line-height: 1.2;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1rem;
`;

export const FooterButton = styled(Button)`
  && {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
      background-color: white;
    }

    svg {
      font-size: 3rem;
    }
  }
`;
