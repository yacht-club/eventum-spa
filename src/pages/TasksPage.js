import React from 'react';
import { Route, Switch } from 'react-router';
import Tasks from '../components/EventPage/Tasks';

const TasksPage = () => (
  <Switch>
    <Route path="/tasks/" exact component={Tasks} />
    <Route path="/tasks/:id/" exact component={Tasks} />
  </Switch>
);

export default TasksPage;
