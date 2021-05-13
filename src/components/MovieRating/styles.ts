import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RatingValues = styled.View`
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ImdbRating = styled.Text`
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
