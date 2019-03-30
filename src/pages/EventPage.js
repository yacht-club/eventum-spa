import React from 'react';
import styled from 'styled-components';
import Event from 'components/EventPage/Event';

const EventPage = ({ className }) => (
  <div className={className}>
    <Event
      name="Хакатон BESTHACK"
      dateFromMilis={1553782940}
      dateToMilis={1553955713}
      timeFromMilis={28800000}
      timeTillMilis={64800000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita repellat error nihil quos praesentium! Quam necessitatibus sed, dicta excepturi totam, saepe autem, quaerat sit natus a ipsum rem. Quia!"
      place="Точка кипения"
    />
  </div>
);

const StyledEventPage = styled(EventPage)``;

export default StyledEventPage;
