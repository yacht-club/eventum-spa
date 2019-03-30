import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import Task from '../Task';
import { getTasksForPerson } from '../../apis/tasks';

const Tasks = ({
                 className,
               }) => {
  console.log(`loading tasks for user`);

  const [tasks, setTasks] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getTasksForPerson({ }).then(data => setTasks({ isLoading: false, data: data }));
  }, []);

  return (
    <div className={className}>
      <Title>Задачи</Title>

      {tasks.data.map(task => (
        <Task {...task} />
      ))}
    </div>
  );
};

const StyledTasks = styled(Tasks)`
  ${Title} {
    margin-bottom: 20px;
  }
`;

export default StyledTasks;
