import styled from 'styled-components/native';

import colors from '@styles/colors';

export const Container = styled.View`
  background: ${colors.mediumGrey};
  height: 220px;
  width: 150px;
  border-radius: 10px;
  /* margin: 18px; */
  /* margin-left: 0; */
  margin: 0 0 60px;
`;

export const Cover = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: 'Roboto-Regular';
`;

export const Stars = styled.View``;
