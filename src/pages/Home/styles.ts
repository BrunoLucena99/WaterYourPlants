import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const MainContainer = styled(SafeAreaView)`
  flex-grow: 1;
  background: ${props => props.theme.background};
`;

export const ScrollView = styled.ScrollView``;
