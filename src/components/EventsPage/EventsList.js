import React from 'react';
import styled from 'styled-components';
import Event from './Event';

const Events = ({ className, events }) => (
  <div className={className}>
    {events.map(event => (
      <Event {...event} key={event.eventUid} />
    ))}
  </div>
);

const StyledEvents = styled(Events)`
  margin-top: 20px;
`;

export default StyledEvents;
