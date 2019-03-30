import React from 'react';
import styled from 'styled-components';
import logoutSvg from './assets/exit.svg';

const Username = styled.div`
  color: #777;
  font-size: 0.85rem;
`;

const Logout = styled.button`
  background-image: url("${logoutSvg}");
  display: box;
  border: none;

  height: 16px;
  width: 20px;
  
  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;
`;

const UserBar = ({ className, username }) => (
  <div className={className}>
    <Username>{username}</Username>
    <Logout onClick={() => console.log('EXIT')} />
  </div>
);

const StyledUserBar = styled(UserBar)`
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  border: none;

  ${Logout} {
    margin-left: 10px;
  }
`;

export default StyledUserBar;
