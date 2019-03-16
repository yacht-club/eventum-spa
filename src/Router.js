import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const RootRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </ConnectedRouter>
);

export default RootRouter;
