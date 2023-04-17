import styled from 'styled-components';
import { flexCenter } from '../../../../styles/mixin';
import Select from '@mui/material/Select';

export const LanguageOption = styled.div`
  ${flexCenter('space-between', 'center')};
  width: 70%;
  color: #c8c9e9;
  /* border: solid 1px black; */
`;

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0 10px;
  color: #c8c9e9;
`;

export const CustomSelect = styled(Select)`
  background-color: white;
  /* height: 40px; */
`;

// export const Item = styled(MenuItem)`
//   font-size: 10px;
//   border: solid 1px black;
// `;
