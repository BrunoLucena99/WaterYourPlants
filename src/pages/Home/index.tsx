import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import {
  Header,
  HeaderText,
  MainContainer,
  ScrollView,
  UserNameText,
} from './styles';

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <StatusBar backgroundColor={theme.primary} />
      <MainContainer>
        <ScrollView>
          <Header>
            <HeaderText>Seja bem vindo,</HeaderText>
            <UserNameText>Fulano !</UserNameText>
          </Header>
        </ScrollView>
      </MainContainer>
    </>
  );
};

export default Home;
