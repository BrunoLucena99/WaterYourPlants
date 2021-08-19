import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const HeaderContainer = styled.View`
  background: ${props => props.theme.primary};
  padding: 30px 15px 50px 15px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderColumn = styled.View``;

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
