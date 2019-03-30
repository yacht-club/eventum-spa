import React from 'react';
import styled from 'styled-components';
import Event from './Event';

const Events = ({ className }) => (
  <div className={className}>
    <Event
      id={1}
      name="Хакатон BESTHACK"
      dateFromMilis={1553782940}
      dateToMilis={1553955713}
      timeFromMilis={28800000}
      timeTillMilis={64800000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita repellat error nihil quos praesentium! Quam necessitatibus sed, dicta excepturi totam, saepe autem, quaerat sit natus a ipsum rem. Quia!"
    />
    <Event
      id={2}
      name="Хакатон BESTHACK"
      dateFromMilis={1553782940}
      dateToMilis={1553955713}
      timeFromMilis={28800000}
      timeTillMilis={64800000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita repellat error nihil quos praesentium! Quam necessitatibus sed, dicta excepturi totam, saepe autem, quaerat sit natus a ipsum rem. Quia!"
    />
    <Event
      id={3}
      name="Хакатон BESTHACK"
      dateFromMilis={1553782940}
      dateToMilis={1553955713}
      timeFromMilis={28800000}
      timeTillMilis={64800000}
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita repellat error nihil quos praesentium! Quam necessitatibus sed, dicta excepturi totam, saepe autem, quaerat sit natus a ipsum rem. Quia!"
    />
  </div>
);

const StyledEvents = styled(Events)`
  margin-top: 20px;
`;

export default StyledEvents;
