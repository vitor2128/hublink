import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 144px;
  border-radius: 10px;
  border-style: dashed;
  border-color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.backgroudrgba};
  margin: 10px 0 10px 0;
`;

export const Img = styled.img`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export const Input = styled.input`
  display: none;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;

  > svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.danger};
    margin-bottom: 10px;
  }
`;
