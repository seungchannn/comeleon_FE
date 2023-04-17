import styled from 'styled-components';

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 50px;
  width: 300px;
  height: 100vh;
  font-size: 50px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
`;

export const LogoIcon = styled.img`
  width: 30px;
`;

export const LogoText = styled.h1`
  margin-left: 15px;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0px;
`;

export const MenuContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 120px;
  gap: 50px;
  width: 250px;
`;

export const Menu = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  background: transparent;
  border: 0px;
  border-right: ${props => (props.isSelected ? '3px solid #5e81f4' : 'none')};
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  width: 20px;
  filter: ${props =>
    props.isSelected
      ? 'invert(44%) sepia(57%) saturate(1471%) hue-rotate(207deg) brightness(99%) contrast(92%)'
      : 'invert(75%) sepia(8%) saturate(779%) hue-rotate(202deg) brightness(87%) contrast(88%)'};
`;

export const MenuText = styled.h2`
  margin-left: 15px;
  font-size: 16px;
  color: ${props => (props.isSelected ? 'black' : '#a2a2c2')};
  transition: 0.3s;
`;

export const TossBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 250px;
  bottom: 50px;
  border-radius: 20px;
  background: #f5f5fb;
`;

export const TossImg = styled.img`
  position: absolute;
  top: -50px;
  width: 130px;
`;

export const TossText = styled.p`
  margin-top: 80px;
  white-space: pre-wrap;
  color: #a2a2c2;
  font-weight: 200;
  font-size: 15px;
  text-align: center;
  line-height: 20px;
`;

export const TossButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 20px;
  border-radius: 10px;
  border: 0px;
  background: #5e81f4;
  color: white;
  font-size: 15px;
`;
