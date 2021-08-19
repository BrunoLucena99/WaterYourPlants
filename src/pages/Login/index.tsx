import React from 'react';
import {useTheme} from 'styled-components';
import theme from '../../utils/theme';
import {
  AuthGoogleButton,
  AuthGoogleText,
  GoogleIcon,
  MainContainer,
  Title,
} from './styles';

const Login = () => {
  const {icons} = useTheme();
  return (
    <MainContainer>
      <Title>Water your Plants!</Title>
      <AuthGoogleButton>
        <GoogleIcon
          name="google"
          size={theme.fontSizes.md}
          color={icons.googleAuth}
        />
        <AuthGoogleText>Continuar com o Google</AuthGoogleText>
      </AuthGoogleButton>
    </MainContainer>
  );
};

export default Login;
