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
        <Route path="/Converter" element={<Converter />} />
        <Route path="/Comment" element={<Comment />} />

        <Route path="/Fullscreen" element={<Fullscreen />} />
        <Route path="/Save" element={<Save />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
