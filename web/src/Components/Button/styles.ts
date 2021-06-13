import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary' | 'buttonAccordion';
  size: 'default' | 'small';
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  height: ${(props) => (props.size === 'default' ? '56px' : '32px')};
  border-radius: 10px;
  border: 0;

  width: 100%;
  transition: background-color 0.2s;
  ${(props) =>
    props.variant === 'primary' &&
    css`
      padding: 0 16px;
      background: #ff9000;
      color: #312e38;
      font-weight: 500;
    `}

  ${(props) => props.variant === 'secondary' && css``}

  &:hover {
    /* filter: brightness(0.95); */
    background: ${shade(0.2, '#ff9000')};
  }

  > p {
    font-size: ${(props) => (props.size === 'default' ? '20px' : '16px')};
    font-weight: 700;
    color: ${(props) => (props.variant === 'primary' ? '#312e38' : `${props.theme.colors.textButtton}`)};
  }
`;
