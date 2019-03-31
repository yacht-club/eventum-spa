import React from 'react';
import styled from 'styled-components';
import Event from './Event';

const ArchiveEvents = ({ className, events }) => (
  <div className={className}>
    {events.map(event => (
      <Event {...event} key={event.eventUid} />
    ))}
  </div>
);

const ArchiveStyledEvents = styled(ArchiveEvents)`
  margin-top: 20px;
`;

export default ArchiveStyledEvents;
