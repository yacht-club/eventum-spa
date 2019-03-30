import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import EventsPage from 'pages/EventsPage';
import TasksPage from 'pages/TasksPage';
import UsersPage from 'pages/UsersPage';

import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';
import PartnersPage from 'pages/PartnersPage';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <React.Fragment>
      <Header />
      <PageContainer>
        <Switch>
          <Route path="/events" component={EventsPage} />
          <Route path="/tasks" component={TasksPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/partners" component={PartnersPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageContainer>
    </React.Fragment>
  </ConnectedRouter>
);

export default RootRouter;
