/* eslint-disable react/button-has-type */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Background } from './styles';

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Container id="top">
      <Background />
    </Container>
  );
};

export default NotFound;
