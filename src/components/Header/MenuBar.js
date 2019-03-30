import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuBar = ({
  className,
  match: {
    params: { id },
  },
}) => (
  <div className={className}>
    <NavLink to={`/events/${id}/`} exact>
      Описание
    </NavLink>
    <NavLink to={`/events/${id}/tasks`}>Задачи</NavLink>
    <NavLink to={`/events/${id}/partners`}>Партнеры</NavLink>
    <NavLink to={`/events/${id}/history`}>История</NavLink>
  </div>
);

const StyledMenuBar = styled(MenuBar)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: 30px;

  a {
    text-decoration: none;
    color: #000;
    line-height: 80px;
    border-bottom: 3px solid transparent;

    &.active {
      border-bottom: 3px solid #e02a45;
    }
  }

  a + a {
    margin-left: 10px;
  }
`;

export default StyledMenuBar;
