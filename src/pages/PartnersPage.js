import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Partners from 'components/PartnersPage/Partners';
import Partner from 'components/PartnersPage/Partner';

const PartnersPage = () => (
  <Switch>
    <Route path="/partners/" exact component={Partners} />
    <Route path="/partners/:id/" exact component={Partner} />
  </Switch>
);

export default PartnersPage;
