import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/Services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import { Container, Header, Time, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Time>31 de Maio</Time>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </Header>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Meetup data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
