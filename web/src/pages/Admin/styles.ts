import styled from 'styled-components';

interface InputProps {
  colorText?: string;
  colorBorder?: string;
  colorBackground?: string;
}

export const Container = styled.div<InputProps>`
  h1 {
    color: ${(props) => props.colorText};
  }
  border: 2px solid ${(props) => props.colorBorder};
  background-color: ${(props) => props.colorBackground};
`;
