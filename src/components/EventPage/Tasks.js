import React from 'react';
import styled from 'styled-components';

const Tasks = ({
  className,
  match: {
    params: { id },
  },
}) => {
  console.log(`loading tasks for event: ${id}`);

  return <div className={className}>TASKS WILL BE HERE</div>;
};

const StyledTasks = styled(Tasks)``;

export default StyledTasks;
