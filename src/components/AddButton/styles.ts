import styled from 'styled-components/native';

interface AddButtonContainerProps {
  size: number;
}

export const AddButtonContainer = styled.TouchableOpacity<AddButtonContainerProps>`
  background: ${props => props.theme.tertiary};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.size / 2}px;
`;
