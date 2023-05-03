import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashboardLogOut from './DashboardLogout';
import DashboardLogIn from './DashboardLogin';
import * as S from './Dashboard.style';

export default function Dashboard() {
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState(true);

  const ACCESS_TOKEN = localStorage.getItem('access_token');

  useEffect(() => {
    ACCESS_TOKEN ? setIsLogin(true) : setIsLogin(false);
  }, []);

  return (
    <S.WholeContainer className="temp">
      {localStorage.getItem('access_token') !== null ? (
        <DashboardLogIn />
      ) : (
        <DashboardLogOut setIsLogin={setIsLogin} />
      )}
    </S.WholeContainer>
  );
}
