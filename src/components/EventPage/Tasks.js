import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';

const Tasks = ({
  className,
  match: {
    params: { id },
  },
}) => {
  console.log(`loading tasks for event: ${id}`);

  return (
    <div className={className}>
      <Title>Задачи</Title>
      TASKS WILL BE HERE
    </div>
  );
};

const StyledTasks = styled(Tasks)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledTasks;
