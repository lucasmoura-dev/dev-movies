import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import colors from '@styles/colors';

export const HeaderLeftContainer = styled.View`
  flex-direction: row;
  padding: 16px 20px 0;
  height: 60px;
`;

export const HeaderRightContainer = styled.View`
  flex-direction: row;
  padding: 15px 28px 0 20px;
  height: 60px;
`;

export const BackIcon = styled(FeatherIcon)`
  color: ${colors.white};
`;

export const ShareIcon = styled(Icon)`
  margin-right: 30px;
  color: ${colors.white};
`;

export const BookmarkIcon = styled(Icon)`
  color: ${colors.yellow};
`;
