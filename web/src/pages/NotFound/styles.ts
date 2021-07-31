import styled from 'styled-components';
import error404 from '../../assets/new404.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  height: 100vh;

  align-items: stretch;
  max-width: 1920px;
  margin: 0 auto;
`;

export const Background = styled.div`
  background: url(${error404}) no-repeat;
  flex: 1;

  background-size: contain;
`;
