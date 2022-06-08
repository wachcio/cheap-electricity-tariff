import { Holiday } from '../../types';

import dayjs from 'dayjs';

/**
 * Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar
 * based on the algorithm by Oudin (1940) from http://www.tondering.dk/claus/cal/easter.php
 * @returns {array} [int month, int day]
 */
function getEaster(year: number) {
  let f = Math.floor,
    // Golden Number - 1
    G = year % 19,
    C = f(year / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    // weekday for the Paschal full moon
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return { day, month, year };
}

function getEasterMonday(year: number): Holiday {
  const date = new Date(getEaster(year).year, getEaster(year).month - 1, getEaster(year).day);

  return {
    day: dayjs(date).add(1, 'day').date(),
    month: dayjs(date).add(1, 'day').month(),
    year: dayjs(date).add(1, 'day').year(),
  };
}

export function getArrayOfEasterMonday(yearStart: number, yearEnd: number): Holiday[] {
  const arr = [];
  for (let i = yearStart; i <= yearEnd; i++) {
    arr.push({
      day: getEasterMonday(i).day,
      month: getEasterMonday(i).month,
      year: getEasterMonday(i).year,
    });
  }
  return arr;
}
