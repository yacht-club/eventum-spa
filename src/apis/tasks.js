import axios from 'axios';

export const getTasksForEvent = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/tasks/event/${id}`).then(x => x.data);

export const getTasksForPerson = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/tasks/person/${id}`).then(x => x.data);

export const getTask = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/tasks/${id}`).then(x => x.data);