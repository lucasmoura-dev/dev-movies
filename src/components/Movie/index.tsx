import React from 'react';

import justiceLeagueCover from '@assets/justice-league.png';

import {Container, Cover, Title, Stars, Content} from './styles';

type MovieProps = {
  cover: string;
  title: string;
};

export const Movie: React.FC<MovieProps> = ({cover, title}) => {
  return (
    <Container>
      <Cover source={{uri: cover}} />
      <Content>
        <Title numberOfLines={1}>{title}</Title>
        <Stars />
      </Content>
    </Container>
  );
};

export default Movie;
