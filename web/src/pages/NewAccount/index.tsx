import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiUser, FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Container, Content, Background, Form } from './styles';
import logo from '../../assets/logoWhite.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useAuth, userName } from '../../hooks/auth';
import { api } from '../../services/api';

const NewAccount: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login } = useAuth();

  const history = useHistory();

  const handleSubmit = async () => {
    if (!email || !password || !name) {
      toast.error('Preencha e-mail e senha para continuar!');
    } else {
      try {
        const response = await api.post('/new-account', { name, email, password });
        login(response.data.token);
        userName(response.data.user.username);

        if (response.data.user.links.length === 0) {
          history.push('/auth/new-profile');
        }

        if (response.data.user.links.length >= 1) {
          history.push('/auth/admin');
        }
      } catch (err) {
        toast.error('Houve um problema com o login, verifique suas credenciais.');
      }
    }
  };

  return (
    <Container id="top">
      <Content>
        <img src={logo} alt={logo} />
        <Form>
          <h1>Faça seu cadastro</h1>
          <Input placeholder="Nome" type="text" icon={FiUser} Change={(e) => setName(e.target.value)} />
          <Input placeholder="E-mail" type="mail" icon={FiMail} Change={(e) => setEmail(e.target.value)} />
          <Input placeholder="Senha" icon={FiLock} iconEye Change={(e) => setPassword(e.target.value)} />
          <Button label="Cadastrar" click={handleSubmit} />
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
