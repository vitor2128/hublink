import styled from 'styled-components';
import { shade } from 'polished';

import back from '../../assets/sharelink-pana.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  max-width: 1920px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 100%;
  max-width: 600px;
  align-items: center;

  > img {
    width: 250px;
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    :hover {
      color: ${shade(0.2, '#ff9000')};
    }

    > svg {
      margin-right: 16px;
      :hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;

export const Form = styled.div`
  margin: 100px 0;
  width: 340px;
  text-align: center;

  h1 {
    margin-bottom: 24px;
    font-size: 22px;
  }

  h2 {
    margin: 24px;
    font-size: 20px;
  }

  > button {
    margin-top: 16px;
  }

  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    :hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${back}) no-repeat center;
  background-size: cover;
`;
