import axios from 'axios';

export const getArchiveEvents = () =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/events/archive`).then(x => x.data);