import styled from 'styled-components/native';

import colors from '@styles/colors';

export const Container = styled.View`
  width: 150px;
  border-radius: 10px;
  align-items: center;
`;

export const CoverWrapper = styled.View`
  width: 150px;
`;

export const Content = styled.View`
  padding-top: 8px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: 'Roboto-Regular';
  margin-bottom: 8px;
  text-align: center;
`;

export const Stars = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RatingValues = styled.View`
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const MovieRating = styled.Text`
  color: #ffcc46;
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;

export const MaxRating = styled.Text`
  margin-left: 2px;
  color: #444448;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
