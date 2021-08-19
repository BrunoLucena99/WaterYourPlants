import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const MainContainer = styled(SafeAreaView)`
  flex-grow: 1;
  background: ${props => props.theme.background};
`;

export const Header = styled.View`
  background: ${props => props.theme.primary};
  padding: 35px 15px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const HeaderText = styled.Text`
  color: ${props => props.theme.white};
  font-family: ${theme.fontFamily.regular};
  font-size: ${theme.fontSizes.md2}px;
`;

export const UserNameText = styled.Text`
  color: ${props => props.theme.white};
  font-family: ${theme.fontFamily.semiBold};
  font-size: ${theme.fontSizes.md}px;
  margin-top: 2px;
`;

export const ScrollView = styled.ScrollView``;
