import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Container, Content, Background, Form } from './styles';
import logo from '../../assets/logoWhite.svg';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { api } from '../../services/api';
import { useAuth, userName } from '../../hooks/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login } = useAuth();

  const history = useHistory();

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error('Preencha e-mail e senha para continuar!');
    } else {
      try {
        const response = await api.post('/login', { email, password });
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
          <h1>Faça seu login</h1>
          <Input
            placeholder="E-mail"
            type="mail"
            variant="input"
            Change={(e) => setEmail(e.target.value)}
            icon={FiMail}
          />
          <Input
            placeholder="Senha"
            variant="password"
            Change={(e) => setPassword(e.target.value)}
            icon={FiLock}
            iconEye
          />
          <Button label="Login" click={handleSubmit} />
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
