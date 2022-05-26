import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
import 'dayjs/locale/pl';

import { Tariff } from '../../types/tariff';

dayjs.locale('pl'); // use locale globally
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Europe/Warsaw');

export const isCheapTariff = (
  dateTime: Date | Dayjs = new Date(),
  tariff: Tariff = Tariff.G12W,
): boolean => {
  dateTime = dayjs.tz(dateTime);
  //   console.log({ dateTime });

  if (tariff == Tariff.G12W) {
    console.log('Taryfa G12W');

    if (
      dateTime.hour() < 6 ||
      dateTime.hour() >= 22 ||
      (dateTime.hour() >= 13 && dateTime.hour() < 15)
    ) {
      return true;
    }
    return false;
  }
  if (tariff == Tariff.G12) {
    console.log('Taryfa G12');
    if (
      dateTime.hour() < 6 ||
      dateTime.hour() >= 22 ||
      (dateTime.hour() >= 13 && dateTime.hour() < 15)
    ) {
      return true;
    }
    return false;
  }
  if (tariff == Tariff.G12R) {
    console.log('Taryfa G12R');
    if (
      dateTime.hour() < 7 ||
      dateTime.hour() >= 22 ||
      (dateTime.hour() >= 13 && dateTime.hour() < 16)
    ) {
      return true;
    }
    return false;
  }
};
