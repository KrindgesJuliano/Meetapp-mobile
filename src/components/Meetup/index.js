import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Buttons from '~/components/Buttons';

import { Container, Image, Info, Title, Time, Locale, Host } from './styles';

export default function Meetup({ data, onButton, ButtonText }) {
  return (
    <Container>
      <Image
        source={{
          uri: data.imagem.url,
        }}
      />
      <Info>
        <Title>{data.title}</Title>
        <Time>
          <Icon name="event" size={14} color="#999" />
          {data.formattedDate}
        </Time>
        <Locale>
          <Icon name="place" size={14} color="#999" />
          {data.location}
        </Locale>
        <Host>
          <Icon name="person" size={14} color="#999" />
          Organizador: {data.User.name}
        </Host>
      </Info>
      <Buttons onPress={onButton}>{ButtonText}</Buttons>
    </Container>
  );
}
