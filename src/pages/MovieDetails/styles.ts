import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
`;
export const MovieDescriptionContent = styled.ScrollView`
  margin: 10px 0 20px;
`;

export const MovieDescription = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
