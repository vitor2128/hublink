import styled, { css } from 'styled-components';

import { Eye, EyeSlash } from '@styled-icons/bootstrap';

interface InputProps {
  variant?: 'input' | 'ckeckbox';
  className?: 'displayErrors' | 'none';
}

export const InputStyled = styled.input<InputProps>`
  display: flex;

  ${(props) =>
    props.variant === 'ckeckbox' &&
    css`
      display: inline;
      width: 24px;
      height: 24px;
      border-radius: 10px;
      color: solid 2px #fdc91f;
      margin: 2px 0 2px 4px;
    `}
  ${(props) =>
    props.variant === 'input' &&
    css`
      width: 100%;
      height: 40px;
      padding-left: 12px;
      border-radius: 10px;
      background-color: ${props.theme.colors.backgroundInput};
      font-size: 20px;
      margin: 24px 0 8px;
      border: none;
      font-size: 16px;
    `}

    ${(props) =>
    props.className === 'displayErrors' &&
    css`
      border: 2px solid ${props.theme.colors.danger};
    `}

  ::placeholder {
    color: #413d3d;
  }
  :focus {
    border: 2px solid ${(props) => props.theme.colors.warning};
  }
`;

export const Eyev = styled(Eye)`
  position: absolute;
  width: 30px;
  color: ${(props) => props.theme.colors.danger};
  right: 8px;
  top: 5px;
`;

export const EyeS = styled(EyeSlash)`
  position: absolute;
  width: 30px;
  color: ${(props) => props.theme.colors.danger};
  right: 8px;
  top: 5px;
`;

export const Container = styled.div`
  position: relative;
`;
