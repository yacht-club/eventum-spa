import axios from 'axios';

export const getHistory = ({ id }) =>
  axios.get(`https://eventums-api.herokuapp.com/event-api/api/history/${id}`).then(x => x.data);