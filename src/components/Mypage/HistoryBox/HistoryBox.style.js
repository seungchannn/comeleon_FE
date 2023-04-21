import styled from 'styled-components';

export const HistoryBox = styled.div`
  display: flex;
  grid-template-columns: 1fr 3fr;
  justify-items: center;
  align-items: center;
  padding: 15px;
  width: 400px;
  height: 100px;
  border: 1px solid #e4e4e4;
  border-radius: 15px;
  background: white;
  cursor: pointer;
`;

export const HistroyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;

export const HistoryTitle = styled.span`
  font-size: 15px;
  color: #131336;
`;

export const HistoryDate = styled.span`
  margin-top: 13px;
  font-size: 10px;
  color: #a2a2c2;
`;

export const HistoryIconBoxRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 70px;
  height: 70px;
  background: #fef2f3;
`;

export const HistoryIconBoxBlue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 70px;
  height: 70px;
  background: #eef2fd;
`;

export const HistoryIconRed = styled.img`
  width: 20px;
  background: #fef2f3;
`;

export const HistoryIconBlue = styled.img`
  width: 20px;
  background: #fef2f3;
`;
