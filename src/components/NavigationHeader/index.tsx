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
  const shareHandle = () => {};

  const favoriteHandle = () => {};

  return (
    <HeaderRightContainer>
      <ShareIcon name="share-variant" size={24} onPress={shareHandle} />
      <BookmarkIcon name="bookmark" size={24} onPress={favoriteHandle} />
    </HeaderRightContainer>
  );
};

export default HeaderRight;
