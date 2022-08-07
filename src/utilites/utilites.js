import { format, addMinutes } from 'date-fns';

export const editStops = (stopsCount) => {
  switch (stopsCount) {
    case 1:
      return '1 пересадкa';

    case 2:
      return '2 пересадки';

    case 3:
      return '3 пересадки';

    default:
      return 'Без пересадок';
  }
};

export const minutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes - hours * 60;

  return `${hours}ч ${remainingMinutes}м`;
};

export const formatTime = (date, duration) => {
  return `${format(new Date(date), 'kk:mm')} - ${format(new Date(addMinutes(new Date(date), duration)), 'kk:mm')}`;
};
