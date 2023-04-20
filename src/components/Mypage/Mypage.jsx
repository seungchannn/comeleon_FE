import React, { useState } from 'react';
import * as S from './Mypage.style';

const Mypage = () => {
  return (
    <S.MypageWhole>
      <div>
        <div>
          <p>My Page</p>
          <img src="./images/logout.png" alt="로그아웃" />
        </div>
        <div>
          <img src="./images/profile.png" alt="프로필사진" />
          <input type="file" />
        </div>
      </div>
    </S.MypageWhole>
  );
};
export default Mypage;
