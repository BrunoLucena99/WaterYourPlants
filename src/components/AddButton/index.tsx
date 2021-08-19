import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {AddButtonContainer} from './styles';

interface AddButtonProps {
  size?: number;
  onPress: () => void;
}

const AddButton = ({size = 24, onPress}: AddButtonProps) => {
  const theme = useTheme();

  return (
    <AddButtonContainer onPress={onPress} size={size}>
      <MaterialCommunityIcons name="plus" size={size} color={theme.white} />
    </AddButtonContainer>
  );
};

export default AddButton;
