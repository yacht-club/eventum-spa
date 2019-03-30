import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Box';
import { convertTimestampToDate } from 'utils/timeUtils';
import { withRouter } from 'react-router-dom';

const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

const Dates = styled.div`
  color: #666;
  font-weight: 300;
`;

const Description = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.2rem;
`;

const Event = ({ className, name, description, history, eventUid, dateFromMillis, dateTillMillis }) => (
  <div className={className} role="link">
    <Box onClick={() => history.push(`/events/${eventUid}`)}>
      <Meta>
        <Title>{name}</Title>
        <Dates>
          {convertTimestampToDate(dateFromMillis)}
          {'-'}
          {convertTimestampToDate(dateTillMillis)}
        </Dates>
      </Meta>
      <Description>{description}</Description>
    </Box>
  </div>
);

const StyledEvent = styled(Event)`
  ${Box} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;
    padding: 20px 28px;

    ${Description} {
      margin-top: 16px;
    }

    transition: all 0.1s ease-in-out;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

export default withRouter(StyledEvent);
