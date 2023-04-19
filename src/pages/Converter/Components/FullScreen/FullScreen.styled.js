import styled from 'styled-components';
import { flexCenter } from '../../../../styles/mixin';

export const FullScreen = styled.div`
  width: 100vw;
  height: 100%;
  ${flexCenter};
`;

export const Left = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #f5f5fb;
  /* border: 1px solid black; */
`;

export const Right = styled.div`
  width: 50%;
  height: 100vh;
  background-color: black;
`;
