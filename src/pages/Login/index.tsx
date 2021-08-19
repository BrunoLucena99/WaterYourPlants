import React from 'react';
import {AuthGoogleButton, AuthGoogleText, MainContainer, Title} from './styles';

const Login = () => (
  <MainContainer>
    <Title>Water your Plants!</Title>
    <AuthGoogleButton>
      <AuthGoogleText>Continuar com o Google</AuthGoogleText>
    </AuthGoogleButton>
  </MainContainer>
);

export default Login;
