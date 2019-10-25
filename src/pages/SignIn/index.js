import React from 'react';
import {Image} from 'react-native';

import Background from '~/components/Background';

import Logo from '~/assets/logo.svg';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={Logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboarType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua Senha secreta"
          />

          <SubmitButton onPress={() => {}}>Entrar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratis</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
