import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Partner from 'components/PartnersPage/Partner';

const PartnersPage = () => (
  <Switch>
    <Route path="/partners/:id/" exact component={Partner} />
  </Switch>
);

export default PartnersPage;
