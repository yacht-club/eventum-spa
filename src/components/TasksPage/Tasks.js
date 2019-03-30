import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';
import Task from '../Task';
import { getTasksForEvent, getTasksForPerson } from '../../apis/tasks';

const Tasks = ({
                 className,
                 match: {
                   params: { id },
                 },
               }) => {
  console.log(`loading tasks for event: ${id}`);

  const [tasks, setTasks] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getTasksForPerson({ id }).then(data => setTasks({ isLoading: false, data: data }));
  });

  const tasksMock = [
    { id: 1, name: 'Закупка футболок с принтами партнеров', status: 'CREATED', deadlineTime: '1553983004' },
    { id: 2, name: 'Разослать приглашения участникам', status: 'RESOLVED', deadlineTime: '1553983004' },
    { id: 3, name: 'Разослать приглашения участникам', status: "RESOLVED", deadlineTime: '1553983004' },
  ];

  return (
    <div className={className}>
      <Title>Задачи</Title>

      {tasks.map(task => (
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
