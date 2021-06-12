import styled from 'styled-components';
import error404 from '../../assets/error404.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: url(${error404}) no-repeat;
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;

  color: #000;

  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: flex-end;

  > button {
    margin-bottom: 34%;
    padding: 10px;
    font-family: Raleway-Medium, Raleway;
    letter-spacing: 0.15em;
    font-size: 18.25px;
    color: #fff;
    border: none;
    background-color: #77e6a6;
    :hover {
      background-color: #50cc85;
      color: #000;
      cursor: pointer;
    }
  }
`;
