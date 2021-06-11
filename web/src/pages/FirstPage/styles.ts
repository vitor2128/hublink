import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  background-color: #000;

  font-family: 'Montserrat', sans-serif;

  color: #fff;

  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: center;
  justify-content: center;

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) / -2);
    margin-left: calc(var(--bs-gutter-x) / -2);
  }

  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }

  .col {
    flex: 1 0 0%;
  }

  .container-fluid {
    max-width: 540px;
  }

  .bio p {
    max-width: 540px;
  }

  .photo {
    margin-top: 40px;
    margin-bottom: 50px;
  }

  .photo img {
    border-radius: 50%;
    max-width: 250px;
  }

  .title h1 {
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 30px;
  }

  .title h2 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }

  .links {
    margin-bottom: 40px;
  }

  .botao {
    color: #fff;

    max-width: 100%;
    min-height: 2.2rem;
    margin-top: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    border-color: #fff;
    border: 1px solid;
    padding-top: 0.3rem;
  }

  .botao:hover {
    color: #000;
    background-color: #fff;
  }

  .social {
    margin-bottom: 40px;
  }
  .social a {
    text-decoration: none;
    color: #ffffff;
  }

  .social a:hover {
    text-decoration: none;
    color: #e7323f;
  }

  .social ul li {
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 5px;
  }

  footer {
    margin-bottom: 10px;
    font-size: 0.8rem;
    line-height: 1rem;
  }

  footer a {
    text-decoration: none;
    color: #ffffff;
  }

  footer a:hover {
    color: #e7323f;
  }
`;
