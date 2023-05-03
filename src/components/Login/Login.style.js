import styled from 'styled-components';
import { motion } from '../../../node_modules/framer-motion/dist/framer-motion';

export const LoginPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh; /* 화면 높이에 맞게 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const LoginContainer = styled.div`
  width: 350px;
  height: 230px;
  border: none;
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  /* color: #5e81f4; */
  color: black;
  align-self: center; /* 중앙에 위치하도록 추가 */
  box-shadow: 5px 10px 20px -4px rgba(0, 0, 0, 0.36);
  transition: 0.3s;

  @media screen and (max-width: 350px) {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  z-index: 30;
`;
export const CloseLoginDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
`;

export const CloseLoginBox = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const LoginHr = styled.hr`
  width: 80%;
  margin-top: -20px;
  opacity: 50%;
`;

export const LoginTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  margin-top: -20px;
  word-break: break-all;
`;

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 0;

  backdrop-filter: blur(10px) brightness(90%);
`;
