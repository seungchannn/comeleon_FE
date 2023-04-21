import React, { useState } from 'react';
import HistoryBox from './HistoryBox/HistoryBox';
import * as S from './Mypage.style';

const Mypage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onChangeImage = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };
  return (
    <S.MypageWhole>
      <S.MypageContainer>
        <S.MypageTopBox>
          <S.MypageTitle>My Page</S.MypageTitle>
          <S.MypageLogoutImg src="./images/logout.png" alt="로그아웃" />
        </S.MypageTopBox>
        <S.MypageContentBox>
          <S.MypageMidBox>
            <S.ProfileImgBox>
              {uploadedImage ? (
                <S.MyProfileImg src={uploadedImage} alt="프로필" />
              ) : (
                <S.MyProfileImg src="./images/profile.png" alt="기본프로필" />
              )}
              <S.ProfileInputLabel>
                <span>+</span>
                <input type="file" onChange={onChangeImage} />
              </S.ProfileInputLabel>
            </S.ProfileImgBox>
            <S.UserName>이름</S.UserName>
          </S.MypageMidBox>
          <S.HistoryContainer>
            <S.HistoryTitle>History</S.HistoryTitle>
            <HistoryBox />
          </S.HistoryContainer>
        </S.MypageContentBox>
      </S.MypageContainer>
    </S.MypageWhole>
  );
};
export default Mypage;
