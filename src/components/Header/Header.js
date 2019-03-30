import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from 'components/common/Container';
import Logo from './Logo';
import NavBar from './NavBar';
import UserBar from './UserBar';

const Header = ({ className }) => (
  <div className={className}>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <NavBar />
      <UserBar username="a.krinitsyn@qiwi.com" />
    </Container>
  </div>
);

const StyledHeader = styled(Header)`
  background-color: #fff;

  ${Container} {
    height: 80px;
    display: flex;
    flex-direction: row;
    width: 100%;

    & > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  ${UserBar} {
    margin-left: auto;
  }
`;

export default StyledHeader;
