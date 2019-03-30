import axios from 'axios';

export const getPartner = ({ id }) =>
  axios.get(`https://partners-api-app.herokuapp.com/partners/${id}`).then(x => x.data.partner);

export const getPartners = async ({ id }) => {
  const partnerIds = await axios
    .get(`https://eventums-api.herokuapp.com/event-api/api/events/${id}/partners/`)
    .then(x => x.data.map(partner => partner.partnerUid));
  const partners = Promise.all(partnerIds.map(partnerId => getPartner({ id: partnerId })));
  return partners;
};
