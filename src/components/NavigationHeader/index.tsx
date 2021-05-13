import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  HeaderRightContainer,
  HeaderLeftContainer,
  ShareIcon,
  BookmarkIcon,
  BackIcon,
} from './styles';

export const HeaderLeft: React.FC = () => {
  const navigation = useNavigation();
  return (
    <HeaderLeftContainer>
      <BackIcon
        name="arrow-left"
        size={20}
        onPress={() => navigation.navigate('Home')}
      />
    </HeaderLeftContainer>
  );
};

const HeaderRight: React.FC = () => {
  return (
    <HeaderRightContainer>
      <ShareIcon
        name="share-variant"
        size={24}
        onPress={() => console.log('1')}
      />
      <BookmarkIcon
        name="bookmark"
        size={24}
        onPress={() => console.log('2')}
      />
    </HeaderRightContainer>
  );
};

export default HeaderRight;
