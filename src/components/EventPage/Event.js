import React from 'react';
import styled from 'styled-components';
import Box from 'components/common/Box';
import { convertTimestampToDate, convertMilisToHours } from 'utils/timeUtils';

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

const Event = ({ className, name, description, dateFromMilis, dateToMilis, timeFromMilis, timeTillMilis, place }) => (
  <div className={className}>
    <Box>
      <Content>
        <Title>{name}</Title>
      </Content>
      <Separator />
      <Content>
        <SubTitle>Дата проведения</SubTitle>
        <Dates>
          {convertTimestampToDate(dateFromMilis)}
          {'-'}
          {convertTimestampToDate(dateToMilis)}
        </Dates>
        <Time>
          {'с '}
          {convertMilisToHours(timeFromMilis)}
          :00
          {' до '}
          {convertMilisToHours(timeTillMilis)}
          :00
        </Time>
        <SubTitle>Местро проведения</SubTitle>
        <Place>{place}</Place>
      </Content>
      <Separator />
      <Content>
        <SubTitle>Описание</SubTitle>
        <Description>{description}</Description>
      </Content>
    </Box>
  </div>
);

const StyledEvent = styled(Event)``;

export default StyledEvent;
