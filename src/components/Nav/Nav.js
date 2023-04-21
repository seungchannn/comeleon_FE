import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './Nav.style';

const Nav = () => {
  const [currentMenu, setCurrentMenu] = useState('Dashboard');

  const navigate = useNavigate();

  const handleMenu = e => {
    const current = e.currentTarget.name;
    setCurrentMenu(current);
    navigate(current?.toLowerCase());
  };

  return (
    <S.NavContainer>
      <S.Logo>
        <S.LogoIcon src={process.env.PUBLIC_URL + '/images/logoIcon.svg'} />
        <S.LogoText>comeleon</S.LogoText>
      </S.Logo>

      <S.MenuContainer>
        {MENU_LIST.map(item => (
          <li key={item.id}>
            <S.Menu
              name={item.name}
              onClick={e => handleMenu(e)}
              isSelected={currentMenu === `${item.name}`}
            >
              <S.MenuIcon
                src={process.env.PUBLIC_URL + `/images/${item.src}.svg`}
                isSelected={currentMenu === `${item.name}`}
              />
              <S.MenuText isSelected={currentMenu === `${item.name}`}>
                {item.name}
              </S.MenuText>
            </S.Menu>
          </li>
        ))}
      </S.MenuContainer>
      <S.TossBox>
        <S.TossImg
          alt="tossImg"
          src={process.env.PUBLIC_URL + '/images/tossIllsustration.png'}
        />
        <S.TossText>
          Change starts
          <br />
          when you donate.
        </S.TossText>
        <a href="https://toss.me/editorb" target="_blank" rel="noreferrer">
          <S.TossButton>Toss Donation</S.TossButton>
        </a>
      </S.TossBox>
    </S.NavContainer>
  );
};

export default Nav;

const MENU_LIST = [
  {
    id: 1,
    src: 'homeIcon',
    name: 'Dashboard',
  },
  {
    id: 2,
    src: 'converterIcon',
    name: 'Converter',
  },
  {
    id: 3,
    src: 'commentIcon',
    name: 'Comment',
  },
];
