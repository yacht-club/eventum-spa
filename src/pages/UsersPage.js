import React from 'react';
import styled from 'styled-components';
import Title from 'components/common/Title';

const UsersPage = ({ className }) => (
  <div className={className}>
    <Title>Пользователи</Title>
  </div>
);

const StyledUsersPage = styled(UsersPage)``;

export default StyledUsersPage;
