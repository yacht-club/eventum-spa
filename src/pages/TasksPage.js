import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';

const TasksPage = ({ className }) => (
  <div className={className}>
    <Title>Задачи</Title>
  </div>
);

const StyledTasksPage = styled(TasksPage)``;

export default StyledTasksPage;
