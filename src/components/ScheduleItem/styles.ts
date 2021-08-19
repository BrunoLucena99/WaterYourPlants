import styled from 'styled-components/native';

export const ScheduleItemContainer = styled.View`
  background: ${props => props.theme.white};
  margin-left: 15px;
  padding: 5px 10px;
  border-radius: 7px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  height: 140px;
  width: 100px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;

export const ScheduleInfo = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
