import { useEffect, useState } from 'react';
import EventsList from '../EventsPage/EventsList';
import styled from 'styled-components';
import React from 'react';
import Title from '../common/Title';
import Fallback from '../common/Fallback';
import { getArchiveEvents } from '../../apis/archive';
import Loader from '../common/Loader';

const ArchiveEvents = ({ className }) => {
  const [events, setEvents] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getArchiveEvents().then(data => setEvents({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <Title>Архив мероприятий</Title>
      <Fallback isLoading={events.isLoading} Component={Loader}>
        <EventsList events={events.data} />
      </Fallback>
    </div>
  );
};

const StyledArchiveEvents = styled(ArchiveEvents)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledArchiveEvents;