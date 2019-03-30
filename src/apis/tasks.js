import axios from 'axios';

export const getTasksForEvent = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/tasks/event/${id}`).then(x => x.data);

export const getTasksForPerson = ({ }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/tasks/person/aae30171-9858-4ce8-956a-76202024524c`).then(x => x.data);

export const getTask = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/tasks/${id}`).then(x => x.data);