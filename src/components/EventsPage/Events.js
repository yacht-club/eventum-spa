import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Title from 'components/common/Title';
import SearchBar from 'components/SearchBar';
import { getEvents } from 'apis/events';
import Fallback from 'components/common/Fallback';
import Loader from 'components/common/Loader';
import TitleContainer from 'components/TitleContainer';
import PlusButton from 'components/PlusButton';
import EventsList from './EventsList';

const Events = ({ className, history }) => {
  const [events, setEvents] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getEvents().then(data => setEvents({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Мероприятия</Title>
        <PlusButton onClick={() => history.push('create/event/')} />
      </TitleContainer>
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

  ${TitleContainer} {
    ${PlusButton} {
      margin-bottom: 20px;
      margin-left: 10px;
    }
  }
`;

export default withRouter(StyledEvents);
