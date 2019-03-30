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

const datesText = (dateFromMilis, dateToMilis) =>
  `${convertTimestampToDate(dateFromMilis)}-${convertTimestampToDate(dateToMilis)}`;

const timesText = (timeFromMilis, timeTillMilis) =>
  `c ${convertMilisToHours(timeFromMilis)}:00 до ${convertMilisToHours(timeTillMilis)}:00`;

const Event = ({ className }) => {
  const name = 'Хакатон BESTHACK';
  const dateFromMilis = 1553782940;
  const dateToMilis = 1553955713;
  const timeFromMilis = 28800000;
  const timeTillMilis = 64800000;
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita repellat error nihil quos praesentium! Quam necessitatibus sed, dicta excepturi totam, saepe autem, quaerat sit natus a ipsum rem. Quia!';
  const place = 'Точка кипения';

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>{name}</Title>
        </Content>
        <Separator />
        <Content>
          <SubTitle>Дата проведения</SubTitle>
          <Dates>{datesText(dateFromMilis, dateToMilis)}</Dates>
          <Time>{timesText(timeFromMilis, timeTillMilis)}</Time>
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
};

const StyledEvent = styled(Event)``;

export default StyledEvent;
