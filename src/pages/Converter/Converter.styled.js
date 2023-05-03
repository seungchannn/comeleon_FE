import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { flexCenter } from '../../styles/mixin';

export const ConverterContainer = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;

  /* border: solid 1px black; */
`;

export const ConverterLeft = styled.div`
  width: 50%;
  height: 100%;
  ${flexCenter}
  flex-direction : column;
  /* margin: auto; */
  background-color: #f5f5fb;
`;

export const Contents = styled.div`
  width: 80%;
  height: 95%;
  /* border: solid 1px black; */
`;

export const Title = styled.div`
  ${flexCenter}
  width: 100%;
  height: 10%;
  font-size: 25px;
  /* border: solid 1px black; */
`;

export const ContentsHeader = styled.div`
  ${flexCenter}
  width: 100%;
  /* height: 5%; */
  /* border: solid 1px black; */
`;

export const ContentsInput = styled.form`
  margin-top: 10px;
  height: 70%;
  width: 100%;
  max-width: 100%;
  /* overflow-x: auto; */
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: white;
  border: solid 1px #c0c0c0;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
  max-width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const ConvertFooter = styled.div`
  ${flexCenter('space-between', 'center')};
  width: 100%;
  height: 10%;
  margin-top: 10px;
  /* border: solid 1px black; */
`;
export const ConverterRight = styled.div`
  width: 50%;
  height: 100%;
  ${flexCenter}
  flex-direction : column;
`;

export const ContentsOutput = styled.div`
  margin-top: 80px;
  height: 85%;
  width: 100%;
  /* border: 3px solid red; */
  overflow: hidden;
  border-radius: 10px;
  /* overflow-x: auto; */
`;
export const Pre = styled.div`
  height: 100%;
  padding-left: 10px;
  background-color: #1e1e1e;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const CodeTitle = styled.div`
  ${flexCenter('flex-end', 'center')}
  height: 35px;
  color: white;
  background-color: #5f81f5;
  padding: 5px 10px 5px 10px;
  text-align: right;
`;

export const CopyIcon = styled(ContentCopyIcon)`
  cursor: pointer;
  margin-right: 5px;
`;

export const Code = styled.div`
  padding: 10px;
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
