import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import SearchBar from 'components/SearchBar';
import EventsList from './EventsList';

const Events = ({ className }) => (
  <div className={className}>
    <Title>Мероприятия</Title>
    <SearchBar />
    <EventsList />
  </div>
);

const StyledEvents = styled(Events)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledEvents;
