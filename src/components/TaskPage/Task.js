import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from 'components/common/Box';
import { getPartner } from 'apis/partners';
import OptionalRender from 'components/OptionalRender';
import { getTask } from '../../apis/tasks';

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

const Text = styled.div`
  line-height: 1.2rem;
`;

const Content = styled.div`
  padding: 20px 40px;
`;

const Separator = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

const Description = styled.div``;

const Task = ({
                className,
                match: {
                  params: { id },
                },
              }) => {
  const [task, setTask] = useState({ isLoading: true });

  useEffect(() => {
    getTask({ id }).then(data => setTask({ isLoading: false, ...data }));
  });

  return (
    <div className={className}>
      <Box>
        <Content>
          <Title>{task.name}</Title>
        </Content>
        <Separator/>
        <Content>
          <OptionalRender when={task.inn}>
            <SubTitle>ИНН</SubTitle>
            <Text>{task.status}</Text>
          </OptionalRender>
          <OptionalRender when={task.inn}>
            <SubTitle>ИНН</SubTitle>
            <Text>{task.inn}</Text>
          </OptionalRender>
        </Content>
        <Separator/>
        <Content>
          <SubTitle>Описание</SubTitle>
          <Description>{task.description}</Description>
        </Content>
      </Box>
    </div>
  );
};

const StyledTask = styled(Task)`
  ${Title} {
    margin-bottom: 10px;
  }
`;

export default StyledTask;