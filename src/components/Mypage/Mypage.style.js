import styled from 'styled-components';

export const MypageWhole = styled.div`
  width: 100%;
  height: 100vh; //화면세로맞춤
`;

export const MypageContainder = styled.div`
  width: 27%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  flex-direction: column;
  border: 1px solid salmon;
`;

export const MypageTopBox = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const MypageContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MypageMidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MypageLogoutImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const MypageTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;

export const MyProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 5px solid #f5f5fb;
`;
export const ProfileImgBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

export const ProfileInputLabel = styled.label`
  display: inline-block;
  position: relative;

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
    position: relative;
    color: #fff;
    border-radius: 100%;
    font-size: 20px;
    padding: 2px 8px 1px 8px;
    right: 35px;
    top: -20px;
    font-weight: 800;
    cursor: pointer;
  }
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;
export const UserCareer = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a2a2c2;
`;
