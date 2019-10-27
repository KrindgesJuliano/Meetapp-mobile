import React, { useEffect, useState, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { format, parseISO, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/Services/api';

import Background from '~/components/Background';
import Buttons from '~/components/Buttons';
import Meetup from '~/components/Meetup';

import { Container, Header, Time, List } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadingMeetups() {
      const response = await api.get('meetups', { params: { date } });
      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(parseISO(meetup.date), "MMMM d', às' hh'h'mm", {
          locale: pt,
        }),
      }));

      setMeetups(data);
    }

    loadingMeetups();
  }, [date]);

  async function handleSubscribe(id) {
    await api.post(`meetups/${id}/subs`);
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <Time>{dateFormatted}</Time>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </Header>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              onSubscribe={() => handleSubscribe(item.id)}
              data={item}
              children="Realizar Inscricao"
            />
          )}
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
