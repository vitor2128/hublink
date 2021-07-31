import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiUser, FiType, FiLink } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Container, Content, Background, Form } from './styles';
import logo from '../../assets/logoWhite.svg';
import { api } from '../../services/api';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { getToken, getUserName } from '../../hooks/auth';

const Profile: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [titleProfile, setTitleProfile] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const history = useHistory();

  const config = {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };

  const user = getUserName();

  if (user !== '') {
    history.push('/auth/admin');
  }

  api
    .post('/auth/find-profile', { username }, config)
    .then((res) => {
      console.log(res.data);

      toast.success('Usuario');
    })
    .catch((error) => {
      console.log(error);
    });

  const handleSubmit = async () => {
    if (!username) {
      toast.error('Preencha os campos vazios para continuar');
    } else {
      try {
        const response = await api.post('/auth/new-profile', { username, titleProfile, bio }, config);
        console.log(response);
        history.push('/auth/admin');
      } catch (err) {
        toast.error('Houve um problema ao cadastrar o perfio, tente novamente');
      }
    }
  };

  return (
    <Container id="top">
      <Content>
        <img src={logo} alt={logo} />
        <Form>
          <h1>Vamos criar seu perfil</h1>
          <h6>As informações abaixos irão aparecer quando o usuario acessar o seu link</h6>
          <Input
            placeholder="hublink.app/Username"
            type="text"
            Change={(e) => setUsername(e.target.value)}
            icon={FiUser}
          />
          <Input
            placeholder="Titulo do perfil"
            type="text"
            Change={(e) => setTitleProfile(e.target.value)}
            icon={FiType}
          />
          <Input placeholder="Descrição do perfil" type="url" Change={(e) => setBio(e.target.value)} icon={FiLink} />
          <Button label="Criar" click={handleSubmit} />
        </Form>
      </Content>

      <Background />
    </Container>
  );
};

export default Profile;
