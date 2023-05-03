import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardLogOut from './DashboardLogout';
import DashboardLogIn from './DashboardLogin';

export default function Dashboard() {
  const [isLogin, setIsLogin] = useState(false);

  return <> {isLogin ? <DashboardLogIn /> : <DashboardLogOut />}</>;
}
