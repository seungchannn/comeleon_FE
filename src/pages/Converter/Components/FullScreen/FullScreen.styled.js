import styled from 'styled-components';
import Button from '@mui/material/Button';
import { flexCenter } from '../../../../styles/mixin';

export const FullScreen = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter};
`;

export const Left = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #f5f5fb;
  line-height: 1.5;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 20px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  /* border: 1px solid black; */
`;

export const Right = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #1e1e1e;
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

export const CloseButton = styled(Button)`
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
