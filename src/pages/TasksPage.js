import React from 'react';
import { Route, Switch } from 'react-router';
import Tasks from '../components/EventPage/Tasks';
import Task from '../components/TaskPage/Task';

const TasksPage = () => (
  <Switch>
    <Route path="/tasks/" exact component={Tasks} />
    <Route path="/tasks/:id/" exact component={Task} />
  </Switch>
);

export default TasksPage;
