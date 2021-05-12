import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Input from '@components/Input';

import avatarImage from '@assets/avatar-example.jpg';

import Movie from '@components/Movie';

import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {ListRenderItemInfo, View} from 'react-native';

import {
  Avatar,
  Container,
  FiltersButton,
  Header,
  HelloMessage,
  Movies,
  SearchBar,
  SearchDescription,
  SearchFields,
  SearchInput,
  SearchTitle,
  ItemsLayout,
  ColumnOne,
  ColumnTwo,
} from './styles';

type Movie = {
  id: number;
  title: string;
  cover: string;
};

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 6,
      title: 'Mulher-Maravilha 1984',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qDA95ebiy3W3m8hTRB3xZNZVVBM.jpg',
    },
    {
      id: 3,
      title: 'Coringa',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg',
    },
    {
      id: 3,
      title: 'Deadpool 2',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3QYjjpcVLDEcbTkM1lFsllcU3La.jpg',
    },
    {
      id: 1,
      title: 'Liga da Justiça',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
    },
    {
      id: 2,
      title: 'Vingadores: Ultimato',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
    },
    {
      id: 4,
      title: 'Batman: O Cavaleiro das Trevas Ressurge',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zRwO5BPPgkTNo1PoomZPE7wkKvQ.jpg',
    },
    {
      id: 5,
      title: 'O Rei Leão',
      cover:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wrHr8eEJYDAA7WYybyH162s4oZ4.jpg',
    },
  ]);

  const renderItem = ({item}: ListRenderItemInfo<Movie>) => {
    return <Movie title={item.title} cover={item.cover} />;
  };

  return (
    <Container>
      <Header>
        <HelloMessage>Juliana</HelloMessage>
        <Avatar source={avatarImage} />
      </Header>
      <SearchBar>
        <SearchTitle>Descubra</SearchTitle>
        <SearchDescription>O seu próximo filme preferido</SearchDescription>
        <SearchFields>
          <Input name="keyword" icon="search" placeholder="Buscar..." />
        </SearchFields>
      </SearchBar>
      <Movies>
        <FlatList
          renderItem={renderItem}
          data={movies}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      </Movies>
    </Container>
  );
};

export default Home;
