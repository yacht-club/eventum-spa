import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import SearchBar from 'components/SearchBar';
import { getEvents } from 'apis/events';
import Fallback from 'components/common/Fallback';
import Loader from 'components/common/Loader';
import EventsList from './EventsList';

const Events = ({ className }) => {
  const [events, setEvents] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getEvents().then(data => setEvents({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <Title>Мероприятия</Title>
      <SearchBar />
      <Fallback isLoading={events.isLoading} Component={Loader}>
        <EventsList events={events.data} />
      </Fallback>
    </div>
  );
};

const StyledEvents = styled(Events)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledEvents;
