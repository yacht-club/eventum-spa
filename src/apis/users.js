import axios from 'axios';

export const getUser = ({ userId }) =>
  axios.get(`https://partners-api-app.herokuapp.com/users/${userId}`).then(x => x.data.user);
