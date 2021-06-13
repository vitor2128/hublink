import React from 'react';
import { Link } from 'react-router-dom';

import { FiUser, FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Container, Content, Background, Form } from './styles';
import logo from '../../assets/logoWhite.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

const NewAccount: React.FC = () => {
  return (
    <Container id="top">
      <Content>
        <img src={logo} alt={logo} />
        <Form>
          <h1>Faça seu cadastro</h1>
          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="mail" icon={FiMail} />
          <Input placeholder="Senha" icon={FiLock} iconEye />
          <Button label="Cadastrar" />
        </Form>

        <Link to="/login">
          <FiLogIn />
          Realizar login
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default NewAccount;
