import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Title from 'components/common/Title';
import { getTasksForEvent } from 'apis/tasks';
import TitleContainer from 'components/TitleContainer';
import PlusButton from 'components/PlusButton';
import Task from '../Task';
import Loader from '../common/Loader';
import Fallback from '../common/Fallback';

const Tasks = ({
                 className,
                 match: {
                   params: { id },
                 },
                 history,
               }) => {
  const [tasks, setTasks] = useState({ isLoading: true, data: [] });

  useEffect(() => {
    getTasksForEvent({ id }).then(data => setTasks({ isLoading: false, data }));
  }, []);

  return (
    <div className={className}>
      <TitleContainer>
        <Title>Задачи</Title>
        <PlusButton onClick={() => history.push(`/events/${id}/create/task/`)}/>
      </TitleContainer>

      <Fallback isLoading={tasks.isLoading} Component={Loader}>
        {tasks.data.map(task => (
          <Task {...task} />
        ))}
      </Fallback>
    </div>
  );
};

const StyledTasks = styled(Tasks)`
  ${Title} {
    margin-bottom: 20px;
  }

  ${TitleContainer} {
    ${PlusButton} {
      margin-bottom: 20px;
      margin-left: 10px;
    }
  }
`;

export default withRouter(StyledTasks);
