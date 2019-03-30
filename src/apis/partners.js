import axios from 'axios';

export const getPartner = ({ id }) =>
  axios.get(`https://partners-api-app.herokuapp.com/partners/${id}`).then(x => x.data.partner);

export const getPartners = () => axios.get(`https://partners-api-app.herokuapp.com/partners/`);
