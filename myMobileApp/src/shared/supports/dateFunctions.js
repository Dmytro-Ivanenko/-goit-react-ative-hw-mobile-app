import moment from 'moment';
import 'moment/locale/uk';

export const getCurrentDate = () => {
  moment().locale('uk');
  const time = moment().format('LT');
  const fullDate = moment().format('DD MMMM YYYY');

  return { time, fullDate };
};
