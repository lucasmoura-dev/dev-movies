import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 40px 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HelloMessage = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-family: 'Roboto-Medium';
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: yellow;
`;

export const SearchBar = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const SearchTitle = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-family: 'Roboto-Bold';
`;

export const SearchDescription = styled.Text`
  margin-top: 8px;
  color: ${colors.lightGrey};
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;

export const SearchFields = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: ${colors.input};
`;

export const FiltersButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  color: ${colors.white};
`;

export const Movies = styled.View`
  margin-top: 32px;
  flex-direction: column;
  width: 100%;
  height: 340px;
`;

export const ItemsLayout = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const MovieWrapper = styled.TouchableOpacity`
  margin-bottom: 20px;
`;
