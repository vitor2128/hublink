import styled from 'styled-components';

type SelectProps = {
  Open: boolean;
};

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundInput};
  border-radius: 10px;
  margin: 24px 0 8px;
  width: 100%;
  height: 40px;
`;

export const DropDownContainer = styled.div`
  margin: 0 auto;
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12px;
  font-size: 16px;
  color: #413d3d;
  > svg {
    width: 38px;
    height: 38px;
    color: ${(props) => props.theme.colors.danger};
  }
`;

export const DropDownListContainer = styled.div<SelectProps>`
  position: relative;
  width: 100%;
  cursor: pointer;
  z-index: 1000;
`;

export const DropDownList = styled.ul`
  border-radius: 10px;
  background: ${(props) => props.theme.colors.backgroundInput};
  color: #413d3d;
  font-size: 16px;
  box-shadow: 0 10px 15px 0 ${(props) => props.theme.colors.boxShadowEstablishment};
  margin-top: 3px;
  &:first-child {
    padding-top: 4px;
  }
`;

export const ListItem = styled.li`
  padding-left: 10px;
  list-style: none;
  padding-bottom: 18px;
  &:hover {
    color: #fd9e46;
  }
`;
