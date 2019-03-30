import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Partners from 'components/PartnersPage/Partners';

const PartnersPage = () => (
  <Switch>
    <Route path="/partners/" exact component={Partners} />
    <Route path="/partners/:id/" exact component={Partners} />
  </Switch>
);

export default PartnersPage;
