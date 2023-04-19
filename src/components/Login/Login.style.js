import styled from 'styled-components';

export const LoginPage = styled.div`
  width: 100%;
  height: 100vh; /* 화면 높이에 맞게 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
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
    border: 1px solid blue;
    border-radius: 20px;
  }
`;

export const CloseLoginBox = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid #f7f7f7;
  border-radius: 100px;
  background-color: white;
`;

export const LoginHr = styled.hr`
  width: 80%;
  margin-top: -20px;
`;

export const LoginTitle = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
`;
