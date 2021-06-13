import styled, { css } from 'styled-components';

interface InputProps {
  variant?: 'input' | 'ckeckbox' | 'description' | 'password';
  className?: string;
  isFocused?: boolean;
  isFilled?: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;

  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #f4ede8;

  width: 100%;

  padding: 16px;

  font-size: 16px;

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-right: 16px;
    color: #666360;
  }

  /* ${(props) =>
    props.variant === 'ckeckbox' &&
    css`
      display: inline;
      width: 24px;
      height: 24px;

      color: solid 2px #fdc91f;
      margin: 2px 0 2px 4px;
    `} */

  ${(props) => props.variant === 'input' && css``}

  ${(props) => props.variant === 'password' && css``}

  ${(props) =>
    props.className === 'displayErrors' &&
    css`
      border: 2px solid ${props.theme.colors.danger};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      svg {
        color: #ff9000;
      }
    `}
  ${(props) =>
    props.isFilled &&
    css`
      > svg {
        color: #ff9000;
      }
    `}





  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #f4ede8;

    ::placeholder {
      color: #666360;
    }

    /* ${(props) =>
      props.variant === 'input' &&
      css`
        ::placeholder {
          color: #413d3d;
        }
      `}
    ${(props) =>
      props.variant === 'password' &&
      css`
        ::placeholder {
          color: #413d3d;
        }
      `} */
  }
`;
