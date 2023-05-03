import { css } from 'styled-components';

export const flexCenter = (
  justifyContent = 'center',
  alignItems = 'center'
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
