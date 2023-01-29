import { Holiday } from '../../types';
import { getArrayOfEasterMonday } from './easter';

// USTAWA
// z dnia 18 stycznia 1951 r.
// o dniach wolnych od pracy
// Art. 1. Dniami wolnymi od pracy są:
// 1) dni niżej wymienione:
// a) 1 stycznia – Nowy Rok,
// b) 6 stycznia – Święto Trzech Króli,
// c) pierwszy dzień Wielkiej Nocy,
// d) drugi dzień Wielkiej Nocy,
// e) 1 maja – Święto Państwowe,
// f) 3 maja – Święto Narodowe Trzeciego Maja,
// g) pierwszy dzień Zielonych Świątek,
// h) dzień Bożego Ciała,
// i) 15 sierpnia – Wniebowzięcie Najświętszej Maryi Panny,
// j) 1 listopada – Wszystkich Świętych,
// k) 11 listopada – Narodowe Święto Niepodległości,
// l) 25 grudnia – pierwszy dzień Bożego Narodzenia,
// m) 26 grudnia – drugi dzień Bożego Narodzenia;
// 2) niedziele

export const publicHolidays: Holiday[] = [
  { day: 1, month: 0 },
  { day: 6, month: 0 },
  { day: 1, month: 4 },
  { day: 3, month: 4 },
  { day: 15, month: 7 },
  { day: 1, month: 10 },
  { day: 11, month: 10 },
  { day: 25, month: 11 },
  { day: 26, month: 11 },
];

export const CorpusChristi: Holiday[] = [
  { day: 16, month: 5, year: 2022 },
  { day: 8, month: 5, year: 2023 },
  { day: 30, month: 4, year: 2024 },
  { day: 19, month: 5, year: 2025 },
  { day: 4, month: 5, year: 2026 },
  { day: 27, month: 4, year: 2027 },
  { day: 15, month: 5, year: 2028 },
  { day: 31, month: 4, year: 2029 },
  { day: 20, month: 5, year: 2030 },
  { day: 12, month: 5, year: 2031 },
  { day: 27, month: 4, year: 2032 },
];

const EasterMondays: Holiday[] = getArrayOfEasterMonday(2022, 2042);

export const holidays = [...publicHolidays, ...CorpusChristi, ...EasterMondays];
