import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import SearchBar from 'components/SearchBar';
import Events from 'components/EventsPage/Events';

const EventsPage = ({ className }) => (
  <div className={className}>
    <Title>Мероприятия</Title>
    <SearchBar />
    <Events />
  </div>
);

const StyledEventsPage = styled(EventsPage)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledEventsPage;
