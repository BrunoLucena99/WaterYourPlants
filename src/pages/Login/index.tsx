import React from 'react';
import {
  AuthGoogleButton,
  AuthGoogleText,
  GoogleIconStyled,
  MainContainer,
  LogoImage,
  Title,
} from './styles';

const Login = () => {
  return (
    <MainContainer>
      <LogoImage
        resizeMode="contain"
        source={require('../../assets/images/logo.png')}
      />
      <Title>Water Your Plants!</Title>
      <AuthGoogleButton>
        <GoogleIconStyled />
        <AuthGoogleText>Continuar com o Google</AuthGoogleText>
      </AuthGoogleButton>
    </MainContainer>
  );
};

export default Login;
