import styled, { keyframes } from 'styled-components';

export const FadeRight = styled(keyframes)`
  0% {
    transform: translateX(-400px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const MypageWhole = styled.div`
  position: absolute;
  width: 400px;
  height: 100vh; //화면세로맞춤
  display: flex;
  justify-content: center;
  background: white;
  right: 0px;
  z-index: 30;
  animation: ${FadeRight} 0.3s;
`;

export const MypageContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 33%;
    margin: 0 auto;
  }
`;

export const MypageTopBox = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const MypageContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const MypageMidBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImgBox = styled.div`
  display: flex;
  position: relative;
`;

export const MypageLogoutImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const MypageTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
`;

export const MyProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 5px solid #f5f5fb;
`;

export const ProfileInputLabel = styled.label`
  display: inline-block;
  position: absolute;

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  span {
    background-color: #5e81f4;
    color: #fff;
    border-radius: 100%;
    font-size: 20px;
    padding: 3px 8px 1px 8px;
    position: absolute;
    top: 125px;
    right: -50px;
    font-weight: 800;

    cursor: pointer;
  }
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-top: 30px;
`;

export const HistoryContainer = styled.div`
  margin-top: 30px;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const HistoryTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  /* border-radius: 10px; */
`;
