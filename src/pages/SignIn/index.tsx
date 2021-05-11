import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('xd');
        }}>
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
