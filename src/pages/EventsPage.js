import React from 'react';
import Events from 'components/EventsPage/Events';
import Event from 'components/EventPage/Event';
import Tasks from 'components/EventPage/Tasks';
import Partners from 'components/EventPage/Partners';
import History from 'components/EventPage/History';
import CreateTask from 'components/EventPage/CreateTask';
import { Route, Switch } from 'react-router-dom';

const EventPage = () => (
  <Switch>
    <Route path="/events/" exact component={Events} />
    <Route path="/events/:id/" exact component={Event} />
    <Route path="/events/:id/tasks" exact component={Tasks} />
    <Route path="/events/:id/partners" exact component={Partners} />
    <Route path="/events/:id/history" exact component={History} />
    <Route path="/events/:id/create/task/" exact component={CreateTask} />
  </Switch>
);

export default EventPage;
