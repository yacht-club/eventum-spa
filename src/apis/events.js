import axios from 'axios';

export const getEvent = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/events/${id}`).then(x => x.data);

export const getEvents = () => axios.get(`https://eventums-api.herokuapp.com/event-api/api/events`).then(x => x.data);
