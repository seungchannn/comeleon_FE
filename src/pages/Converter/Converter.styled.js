import styled from 'styled-components';
import { flexCenter } from '../../styles/mixin';

export const ConverterContainer = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
  /* border: solid 1px black; */
`;

export const ConverterLeft = styled.div`
  width: 50%;
  height: 100%;
  ${flexCenter}
  flex-direction : column;
  /* margin: auto; */
  background-color: #f5f5fb;
`;

export const Contents = styled.div`
  width: 80%;
  height: 95%;
  /* border: solid 1px black; */
`;

export const Title = styled.div`
  ${flexCenter}
  width: 100%;
  height: 10%;
  font-size: 25px;
  /* border: solid 1px black; */
`;

export const ContentsHeader = styled.div`
  ${flexCenter}
  width: 100%;
  height: 10%;
  /* border: solid 1px black; */
`;

export const ContentsInput = styled.form`
  margin-top: 10px;

  height: 70%;
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: white;
  border: solid 1px #c8c9e9;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  resize: none;
`;
export const ConvertFooter = styled.div`
  ${flexCenter('space-between', 'center')};
  width: 100%;
  height: 10%;
  margin-top: 10px;
  /* border: solid 1px black; */
`;
export const ConverterRight = styled.div`
  width: 50%;
  height: 100%;
`;
