import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '@styles/colors';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${colors.purple};
  border-radius: 10px;
  margin: 8px 0;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;
