import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const history = createBrowserHistory();

const RootRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default RootRouter;
