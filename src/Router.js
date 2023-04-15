import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Mypage from './components/Mypage/Mypage';
import Dashboard from './pages/Dashboard/Dashboard';
import Converter from './pages/Converter/Converter';
import Comment from './pages/Comment/Comment';
import Fullscreen from './pages/SubMenu/Fullscreen';
import Save from './pages/SubMenu/Fullscreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/fullScreen" element={<Fullscreen />} />
        <Route path="/save" element={<Save />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
