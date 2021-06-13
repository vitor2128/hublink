import styled from 'styled-components';
import error404 from '../../assets/fundo.svg';

export const Container = styled.div`
  display: flex;

  background: url(${error404}) no-repeat;

  width: 100%;
  height: 100vh;

  flex: 1;
`;
