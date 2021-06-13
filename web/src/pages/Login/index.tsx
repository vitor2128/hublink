import React from 'react';
import { Link } from 'react-router-dom';

import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background, Form } from './styles';
import logo from '../../assets/logoWhite.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const Login: React.FC = () => {
  return (
    <Container id="top">
      <Content>
        <img src={logo} alt={logo} />
        <Form>
          <h1>Faça seu login</h1>
          <Input placeholder="E-mail" type="text" variant="input" icon={FiMail} />
          <Input placeholder="Senha" variant="password" icon={FiLock} iconEye />
          <Button label="Cadastrar" />
          <Link to="/">Esqueci minha senha</Link>
        </Form>
        <Link to="/new-account">
          <FiArrowLeft />
          Realizar cadastro
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
