import React from 'react';
import {FlatList} from 'react-native';
import {ScheduleListItem} from '../../types/scheduleList';
import ScheduleItem from '../ScheduleItem';
import {MainContainer} from './styles';

const mockedPlantList: ScheduleListItem[] = [
  {
    name: 'Planta 1',
    day: '20-08-2020',
    id: '1',
    img: 'https://img.elo7.com.br/product/main/2D0F26B/cacto-castelo-de-fadas-acanthocereus-tetragonus-castelo-de-fadas.jpg',
    status: 'pending',
  },
  {
    name: 'Planta 2',
    day: '20-08-2020',
    id: '2',
    img: 'https://cdn.awsli.com.br/1000x1000/1112/1112786/produto/54256252/060da67e2e.jpg',
    status: 'pending',
  },
  {
    name: 'Planta 3',
    day: '20-08-2020',
    id: '3',
    img: 'https://img.elo7.com.br/product/main/2D0F26B/cacto-castelo-de-fadas-acanthocereus-tetragonus-castelo-de-fadas.jpg',
    status: 'pending',
  },
  {
    name: 'Planta 4',
    day: '21-08-2020',
    id: '4',
    img: 'https://cdn.awsli.com.br/1000x1000/1112/1112786/produto/54256252/060da67e2e.jpg',
    status: 'pending',
  },
  {
    name: 'Planta 5',
    day: '23-09-2020',
    id: '5',
    img: 'https://cdn.awsli.com.br/1000x1000/1112/1112786/produto/54256252/060da67e2e.jpg',
    status: 'pending',
  },
];

const ScheduleList = () => {
  return (
    <MainContainer>
      <FlatList
        horizontal
        keyExtractor={(item, index) => `${item?.id}-${index}`}
        data={mockedPlantList}
        renderItem={({item}) => <ScheduleItem item={item} />}
      />
    </MainContainer>
  );
};

export default ScheduleList;
