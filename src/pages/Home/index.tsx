import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import HeaderHome from '../../components/HeaderHome';
import ScheduleList from '../../components/ScheduleList';
import {MainContainer, ScrollView} from './styles';

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar backgroundColor={theme.primary} />
      <MainContainer>
        <ScrollView>
          <HeaderHome />
          <ScheduleList />
        </ScrollView>
      </MainContainer>
    </>
  );
};

export default Home;
