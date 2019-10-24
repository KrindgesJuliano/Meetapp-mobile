import React from 'react';
import {Text} from 'react-native';

import Input from '~/components/Input';
import Buttons from '~/components/Buttons';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>

      <Input
        style={{marginTop: 30}}
        icon="call"
        placeholder="digite seu nome"
      />

      <Buttons>Entrar</Buttons>
    </Background>
  );
}
