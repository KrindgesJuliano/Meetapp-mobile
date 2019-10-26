import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Image,
  Info,
  Title,
  Time,
  Locale,
  Host,
  SubscriberButton,
} from './styles';

export default function Meetup() {
  return (
    <Container>
      <Image
        source={{
          uri:
            'https://cdn.shopify.com/s/files/1/0229/0839/files/Como_organizar_un_Shopify_MeetUp.jpeg',
        }}
      />
      <Info>
        <Title>Meetup de React Native</Title>
        <Time>
          <Icon name="event" size={14} color="#999" />
          24 de Junho, as 2-h
        </Time>
        <Locale>
          <Icon name="place" size={14} color="#999" />
          Rua Guilherme Gembala, 260
        </Locale>
        <Host>
          <Icon name="person" size={14} color="#999" />
          Organizador: diego Fernandes
        </Host>
        <SubscriberButton>Realizar inscricao</SubscriberButton>
      </Info>
    </Container>
  );
}
