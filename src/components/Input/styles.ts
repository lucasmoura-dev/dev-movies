import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '@styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #191a1b;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const ClearIcon = styled(Ionicons)`
  margin-left: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
`;
