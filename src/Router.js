import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Mypage from './components/Mypage/Mypage';
import Dashboard from './pages/Dashboard/Dashboard';
import Converter from './pages/Converter/Converter';
import Comment from './pages/Comment/Comment';
import Fullscreen from './pages/Converter/Components/FullScreen/FullScreen';
import Save from './pages/Converter/Components/Save/Save';

const Router = () => {
  return (
    <BrowserRouter>
      <Center>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/fullScreen" element={<Fullscreen />} />
          <Route path="/save" element={<Save />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Center>
    </BrowserRouter>
  );
};

const Center = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default Router;
