import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #f5f5fb;
  overflow: hidden;
`;

export const LoginWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 80px;
  right: 80px;
  cursor: pointer;
  z-index: 20;
`;

export const LoginIcon = styled.img`
  width: 20px;
  margin-left: 8px;
  opacity: 30%;
`;

export const LoginSpan = styled.div`
  font-size: 15px;
`;

export const TextOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainText = styled.h2`
  font-family: 'Poppins', sans-serif;
  white-space: pre-wrap;
  font-size: 50px;
  font-weight: 600;
  color: #5e81f4;
`;

export const SubText = styled.p`
  margin-top: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: 200;
  color: #111026;
`;

export const StartBtn = styled.button`
  width: 200px;
  height: 60px;
  margin-top: 50px;
  border-radius: 15px;
  border: 0px;
  background: #5e81f4;
  color: white;
  font-size: 20px;
`;

export const SuggestionText = styled.h2`
  position: absolute;
  bottom: 100px;
  margin-top: 100px;
  font-size: 30px;
  font-weight: 500;
  color: white;
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgb(94, 129, 244);
  background: linear-gradient(
    180deg,
    rgba(94, 129, 244, 0) 0%,
    rgba(94, 129, 244, 0) 50%,
    rgba(94, 129, 244, 1) 100%
  );
  opacity: 0.8;
  z-index: 5;
`;

export const HistoryContaienr = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 100px;
  gap: 20px;
  z-index: 0;
`;
