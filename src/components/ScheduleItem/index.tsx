import React from 'react';
import {Text} from 'react-native';
import {ScheduleListItem} from '../../types/scheduleList';
import {
  Image,
  ImageContainer,
  ScheduleInfo,
  ScheduleItemContainer,
} from './styles';

interface ScheduleItemProps {
  item: ScheduleListItem;
}

const ScheduleItem = ({item}: ScheduleItemProps) => {
  return (
    <ScheduleItemContainer>
      <ImageContainer>
        <Image source={{uri: item.img}} resizeMode="cover" />
      </ImageContainer>
      <ScheduleInfo>
        <Text>{item.name}</Text>
        <Text>{item.day}</Text>
      </ScheduleInfo>
    </ScheduleItemContainer>
  );
};

export default React.memo(ScheduleItem);
