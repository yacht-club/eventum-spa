import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

import Container from 'components/common/Container';
import Logo from './Logo';
import NavBar from './NavBar';
import UserBar from './UserBar';
import MenuBar from './MenuBar';

const Header = ({ className }) => (
  <div className={className}>
    <Container>
      <Link to="/events">
        <Logo />
      </Link>
      <Switch>
        <Route path="/events/:id/" component={MenuBar} />
        <Route component={NavBar} />
      </Switch>
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
