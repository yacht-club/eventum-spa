import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from 'components/common/Box';
import { convertTimestampToDate, convertMilisToHours } from 'utils/timeUtils';
import { getEvent } from 'apis/events';

const Title = styled.h1`
  margin: 16px 0 0 0;
  padding: 0;
  font-weight: 800;
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  margin: 8px 0 4px 0;
  padding: 0;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #840f13;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

const Dates = styled.div`
  line-height: 1.2rem;
`;

const Time = styled.div`
  line-height: 1.2rem;
  margin-bottom: 20px;
`;

const Description = styled.div``;

const Place = styled.div`
  line-height: 1.2rem;
`;

const datesText = (dateFromMilis, dateToMilis) =>
  `${convertTimestampToDate(dateFromMilis)}-${convertTimestampToDate(dateToMilis)}`;

const timesText = (timeFromMilis, timeTillMilis) =>
  `c ${convertMilisToHours(timeFromMilis)}:00 до ${convertMilisToHours(timeTillMilis)}:00`;

const Event = ({
  className,
  match: {
    params: { id },
  },
}) => {
  const [event, setEvents] = useState({ isLoading: true });

  useEffect(() => {
    getEvent({ id }).then(data => setEvents({ isLoading: false, ...data }));
  });

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>{event.name}</Title>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Дата проведения</SubTitle>
          <Dates>{datesText(event.dateFromMilis, event.dateToMilis)}</Dates>
          <Time>{timesText(event.timeFromMilis, event.timeTillMilis)}</Time>
          <SubTitle>Местро проведения</SubTitle>
          <Place>{event.place}</Place>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Описание</SubTitle>
          <Description>{event.description}</Description>
        </Content>
      </Box>
    </div>
  );
};

const StyledEvent = styled(Event)``;

export default StyledEvent;
