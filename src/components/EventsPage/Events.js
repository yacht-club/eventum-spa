import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import SearchBar from 'components/SearchBar';
import { getEvents } from 'apis/events';
import EventsList from './EventsList';

const Events = ({ className }) => {
  const [events, setEvents] = useState({ isLoading: true, events: [] });

  useEffect(() => {
    getEvents().then(data => setEvents({ isLoading: false, events: data }));
  });

  return (
    <div className={className}>
      <Title>Мероприятия</Title>
      <SearchBar />
      <EventsList events={events.events} />
    </div>
  );
};

const StyledEvents = styled(Events)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledEvents;
