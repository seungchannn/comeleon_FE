import styled from 'styled-components';

export const DashboardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 150px 150px;
  background: #f5f5fb;
  overflow: hidden;
  gap: 100px;
`;

export const MypageIcon = styled.img`
  position: absolute;
  width: 30px;
  right: 100px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainText = styled.h2`
  white-space: pre-wrap;
  font-size: 50px;
  font-weight: 600;
  color: #5e81f4;
`;

export const SubText = styled.p`
  margin-top: 30px;
  line-height: 30px;
  font-size: 20px;
  font-weight: 200;
  color: #111026;
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SubTitleText = styled.h2`
  font-size: 20px;
`;

export const QuickmenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuickmenuWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;
`;

export const QuickmenuButtonConvert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: #ff808b;
  border-radius: 20px;
  border: 0px;
  cursor: pointer;
`;

export const QuickmenuButtonConmment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background: #5e81f4;
  border-radius: 20px;
  border: 0px;
  cursor: pointer;
`;

export const QuickmenuIcon = styled.img`
  width: 70px;
  filter: invert(1);
`;

export const QuickmenuSpan = styled.span`
  margin-top: 10px;
  font-size: 12px;
  color: white;
`;

export const HistoryContaienr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 10px;
`;
