import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import EventsPage from 'pages/EventsPage';
import TasksPage from 'pages/TasksPage';
import UsersPage from 'pages/UsersPage';
import EventPage from 'pages/EventPage';

import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import PageContainer from 'components/PageContainer';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <React.Fragment>
      <Header />
      <PageContainer>
        <Switch>
          <Route path="/" exact component={EventsPage} />
          <Route path="/events" exact component={EventsPage} />
          <Route path="/events/:id" component={EventPage} />
          <Route path="/tasks" exact component={TasksPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageContainer>
    </React.Fragment>
  </ConnectedRouter>
);

export default RootRouter;
