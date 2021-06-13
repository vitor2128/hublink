/* eslint-disable react/button-has-type */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const NotFound: React.FC = () => {
  const history = useHistory();

  return <Container id="top" />;
};

export default NotFound;
