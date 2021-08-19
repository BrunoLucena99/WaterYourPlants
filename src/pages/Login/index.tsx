import React from 'react';
import {
  AuthGoogleButton,
  AuthGoogleText,
  GoogleIconStyled,
  MainContainer,
  LogoImage,
} from './styles';

const Login = () => {
  return (
    <MainContainer>
      <LogoImage
        resizeMode="contain"
        source={require('../../assets/images/logo.png')}
      />
      <AuthGoogleButton activeOpacity={0.8}>
        <GoogleIconStyled />
        <AuthGoogleText>Continuar com o Google</AuthGoogleText>
      </AuthGoogleButton>
    </MainContainer>
  );
};

export default Login;
