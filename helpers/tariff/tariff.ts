import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
import 'dayjs/locale/pl';
import objectSupport from 'dayjs/plugin/objectSupport';
import arraySupport from 'dayjs/plugin/arraySupport';
import weekday from 'dayjs/plugin/weekday';

import { Tariff } from '../../types/tariff';
import { holidays } from '../polishHolidays/holidays';

dayjs.locale('pl'); // use locale globally
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(objectSupport);
dayjs.extend(arraySupport);
dayjs.extend(weekday);

dayjs.tz.setDefault('Europe/Warsaw');

const addYearToHolidays = (dateTime: Date | Dayjs): Array<Dayjs> => {
  const year = dayjs(dateTime).year();
  return holidays.map(e => {
    return !e.year
      ? dayjs([year, e.month - 1, e.day])
          .add(3, 'hour')
          .tz()
      : dayjs([e.year, e.month - 1, e.day])
          .add(3, 'hour')
          .tz();
  });
};

export const isCheapTariff = (
  dateTime: Date | Dayjs = new Date(),
  tariff: Tariff = Tariff.Energa_G12W,
): boolean => {
  dateTime = dayjs.tz(dateTime);

  // Tariff G12W cheap hours:
  // - 00:00 - 6:00
  // - 13:00 - 15:00
  // - 22:00 - 23:59
  // - saturdays
  // - sundays
  // - polish public holidays

  if (tariff == Tariff.Energa_G12W) {
    if (
      dateTime.hour() < 6 ||
      dateTime.hour() >= 22 ||
      (dateTime.hour() >= 13 && dateTime.hour() < 15)
    ) {
      return true;
    }
    dateTime = dayjs(dateTime).subtract(1, 'month').tz();

    if (dateTime.weekday() === 5 || dateTime.weekday() === 6) return true;

    const dateTimeAndHolidaysComparation = addYearToHolidays(dateTime).map(e =>
      e.isSame(dateTime, 'day'),
    );
    if (dateTimeAndHolidaysComparation.includes(true) === true) return true;

    return false;
  }

  // Tariff G12 cheap hours:

  //   - 00:00 - 6:00
  //   - 13:00 - 15:00
  //   - 22:00 - 23:59

  if (tariff == Tariff.Energa_G12) {
    if (
      dateTime.hour() < 6 ||
      dateTime.hour() >= 22 ||
      (dateTime.hour() >= 13 && dateTime.hour() < 15)
    ) {
      return true;
    }
    return false;
  }

  // Tariff G12R cheap hours:
  // - 00:00 - 7:00
  // - 13:00 - 16:00
  // - 22:00 - 23:59

  if (tariff == Tariff.Energa_G12R) {
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
