import React from 'react';
import styled from 'styled-components';
import Event from 'components/EventPage/Event';
import Tasks from 'components/EventPage/Tasks';
import Partners from 'components/EventPage/Partners';
import History from 'components/EventPage/History';
import { Route, Switch } from 'react-router-dom';

const EventPage = ({ className }) => (
  <div className={className}>
    <Switch>
      <Route path="/events/:id/" exact component={Event} />
      <Route path="/events/:id/tasks" exact component={Tasks} />
      <Route path="/events/:id/partners" exact component={Partners} />
      <Route path="/events/:id/history" exact component={History} />
    </Switch>
  </div>
);

const StyledEventPage = styled(EventPage)``;

export default StyledEventPage;
