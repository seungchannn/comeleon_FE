import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DashboardLogOut from './DashboardLogout';
import DashboardLogIn from './DashboardLogin';
import * as S from './Dashboard.style';

export default function Dashboard() {
  const [isLogin, setIsLogin] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      setIsLogin(false);
    }
    setIsLogin(true);
  }, []);

  console.log(localStorage.getItem('access_token'));

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
