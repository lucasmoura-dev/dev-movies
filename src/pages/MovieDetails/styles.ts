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

export const CoverWrapper = styled.View`
  width: 200px;
`;

export const MovieContent = styled.View`
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
  font-size: 30px;
`;

export const MovieInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 8px;
`;

export const Year = styled.Text`
  color: ${colors.lightGrey};
  font-size: 16px;
  margin-right: 10px;
  font-family: 'Roboto-Medium';
`;

export const Genres = styled.Text`
  color: ${colors.mediumGrey};
  font-size: 16px;
  margin-right: 10px;
  font-family: 'Roboto-Regular';
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
  color: ${colors.yellow};
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;

export const MaxRating = styled.Text`
  margin-left: 2px;
  color: ${colors.darkGrey};
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
