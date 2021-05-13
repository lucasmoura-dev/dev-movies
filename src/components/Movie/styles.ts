import styled from 'styled-components/native';

import colors from '@styles/colors';

type ContainerProps = {
  coverWidth?: number;
  coverHeight?: number;
};

export const Container = styled.View<ContainerProps>`
  /* height: ${p => (p.coverHeight ? `${p.coverHeight}px` : '220px')}; */
  width: ${p => (p.coverWidth ? `${p.coverWidth}px` : '150px')};
  border-radius: 10px;
  /* margin: 0 0 50px; */
  /* background: ${colors.mediumGrey}; */
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
  /* height: 60px; */
  /* background: pink; */
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: 'Roboto-Regular';
`;

export const MovieInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

export const Year = styled.Text`
  color: #bec1d0;
  font-size: 16px;
  margin-right: 10px;
  font-family: 'Roboto-Medium';
`;

export const Categories = styled.Text`
  color: #7f8287;
  font-size: 16px;
  margin-right: 10px;
  font-family: 'Roboto-Regular';
`;

export const Duration = styled.Text`
  color: #7f8287;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Stars = styled.View`
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
