import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashboardLogOut from './DashboardLogout';
import DashboardLogIn from './DashboardLogin';
import * as S from './Dashboard.style';

export default function Dashboard() {
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== undefined) {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <S.WholeContainer className="temp">
      {isLogin ? (
        <DashboardLogIn />
      ) : (
        <DashboardLogOut setIsLogin={setIsLogin} />
      )}
    </S.WholeContainer>
  );
}
