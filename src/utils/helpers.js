import { Dimensions } from 'react-native';

const widthScreen = Dimensions.get('screen').width;

function formatDate(date) {
  let current_datetime = new Date(date);
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let formatted_date =
    current_datetime.getDate() +
    ' ' +
    months[current_datetime.getMonth()] +
    ' ' +
    current_datetime.getFullYear();

  return formatted_date;
}

export { formatDate, widthScreen };
