import React from 'react';
import {LoginPageProps} from '../../types/routes';
import {
  AuthGoogleButton,
  AuthGoogleText,
  GoogleIconStyled,
  MainContainer,
  LogoImage,
  Title,
} from './styles';

const Login = ({navigation}: LoginPageProps) => {
  const onGoogleAuthPress = () => navigation.navigate('Home');

  return (
    <MainContainer>
      <LogoImage
        resizeMode="contain"
        source={require('../../assets/images/logo.png')}
      />
      <Title>Water Your Plants!</Title>
      <AuthGoogleButton onPress={onGoogleAuthPress}>
        <GoogleIconStyled />
        <AuthGoogleText>Continuar com o Google</AuthGoogleText>
      </AuthGoogleButton>
    </MainContainer>
  );
};

export default Login;
