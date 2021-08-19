import React from 'react';
import AddButton from '../AddButton';
import {
  HeaderContainer,
  HeaderColumn,
  HeaderText,
  UserNameText,
} from './styles';

const HeaderHome = () => {
  return (
    <HeaderContainer>
      <HeaderColumn>
        <HeaderText>Seja bem vindo,</HeaderText>
        <UserNameText>Fulano !</UserNameText>
      </HeaderColumn>
      <HeaderColumn>
        <AddButton onPress={() => {}} size={36} />
      </HeaderColumn>
    </HeaderContainer>
  );
};

export default HeaderHome;
