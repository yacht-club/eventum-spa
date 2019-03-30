import moment from 'moment';

export const convertMilisToHours = milis => milis / (60 * 60 * 1000);
export const convertTimestampToDate = timestamp => moment.unix(timestamp).format('LL');
