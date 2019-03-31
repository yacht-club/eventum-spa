import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = ({ className }) => (
  <div className={className}>
    <NavLink to="/events">Мероприятия</NavLink>
    <NavLink to="/tasks">Мои задачи</NavLink>
    <NavLink to="/archive">Архив</NavLink>
  </div>
);

const StyledNavBar = styled(NavBar)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-left: 30px;
  overflow-x: scroll;

  a {
    text-decoration: none;
    color: #000;
    line-height: 80px;
    border-bottom: 3px solid transparent;

    &.active {
      border-bottom: 3px solid #692eba;
    }
  }

  a + a {
    margin-left: 10px;
  }
`;

export default StyledNavBar;
