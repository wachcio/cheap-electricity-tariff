import { Holiday } from '../../types';
import { getArrayOfEasterMonday } from './easter';

// 19 lutego – Dzień Nauki Polskiej (ustanowiony w 2020, jako święto państwowe)[20]
// 1 marca – Narodowy Dzień Pamięci „Żołnierzy Wyklętych” (ustanowiony w 2011, jako święto państwowe)[14]
// 24 marca – Narodowy Dzień Pamięci Polaków ratujących Żydów pod okupacją niemiecką (ustanowiony w 2018, jako święto państwowe)[17]
// 14 kwietnia – Święto Chrztu Polski (ustanowione w 2019, jako święto państwowe)[19]
// 1 maja – święto państwowe, nieformalnie nazywane Świętem Pracy (ustanowione w 1950)[8]
// 3 maja – Święto Narodowe Trzeciego Maja (ustanowione w 1919[4], ponownie w 1990)[11]
// 8 maja – Narodowy Dzień Zwycięstwa (ustanowiony 24 kwietnia 2015 roku „w celu upamiętnienia zwycięstwa nad hitlerowskimi Niemcami”)[15]
// 12 lipca – Dzień Walki i Męczeństwa Wsi Polskiej (ustanowiony w 29 września 2017 jako święto państwowe w „hołdzie mieszkańcom polskich wsi za ich patriotyczną postawę w czasie II wojny światowej”)[16]
// 1 sierpnia – Narodowy Dzień Pamięci Powstania Warszawskiego (ustanowiony w 2009, jako święto państwowe)[13]
// 31 sierpnia – Dzień Solidarności i Wolności (ustanowiony w 2005, jako święto państwowe)[12]
// 19 października – Narodowy Dzień Pamięci Duchownych Niezłomnych (ustanowiony w 2018, jako święto państwowe)[18]
// 11 listopada – Narodowe Święto Niepodległości (ustanowione w 1937[5], ponownie w 1989)[9]
// 27 grudnia – Narodowy Dzień Zwycięskiego Powstania Wielkopolskiego (ustanowiony w 2021, jako święto państwowe)[21]

//Inne dni ustawowo wolne od pracy w 2022
// Nowy Rok                                            1 stycznia sobota
// Święto Trzech Króli                            6 stycznia śczwartek
// Wielkanoc                                            17 kwietnia niedziela
// Poniedziałek Wielkanocny                18 kwietnia poniedziałek
// Zielone Świątki                                   5 czerwca niedziela
// Dzień Bożego Ciała                            16 czerwca czwartek
// Wniebowzięcie NMP                          15 sierpnia poniedziałek
// Wszystkich Świętych                         1 listopada wtorek
// I Dzień Bożego Narodzenia               25 grudnia niedziela
// II Dzień Bożego Narodzenia              26 grudnia poniedziałek

export const publicHolidays: Holiday[] = [
  { day: 1, month: 1 },
  { day: 6, month: 1 },
  { day: 19, month: 2 },
  { day: 1, month: 3 },
  { day: 24, month: 3 },
  { day: 14, month: 4 },
  { day: 1, month: 5 },
  { day: 3, month: 5 },
  { day: 8, month: 5 },
  { day: 12, month: 7 },
  { day: 1, month: 8 },
  { day: 15, month: 8 },
  { day: 31, month: 8 },
  { day: 19, month: 10 },
  { day: 1, month: 11 },
  { day: 11, month: 11 },
  { day: 25, month: 12 },
  { day: 26, month: 12 },
  { day: 27, month: 12 },
];

//Zielone Świątki w latach następnych
// 5 czerwca 2022
// 28 maja 2023
// 19 maja 2024
// 8 czerwca 2025
// 24 maja 2026
// 16 maja 2027
// 4 czerwca 2028
// 20 maja 2029
// 9 czerwca 2030
// 1 czerwca 2031
// 16 maja 2032

export const Pentecost: Holiday[] = [
  { day: 5, month: 6, year: 2022 },
  { day: 28, month: 5, year: 2023 },
  { day: 19, month: 5, year: 2024 },
  { day: 8, month: 6, year: 2025 },
  { day: 24, month: 5, year: 2026 },
  { day: 16, month: 5, year: 2027 },
  { day: 4, month: 6, year: 2028 },
  { day: 20, month: 5, year: 2029 },
  { day: 9, month: 6, year: 2030 },
  { day: 1, month: 6, year: 2031 },
  { day: 16, month: 5, year: 2032 },
];

const EasterMondays: Holiday[] = getArrayOfEasterMonday(2022, 2032);

export const holidays = [...publicHolidays, ...Pentecost, ...EasterMondays];
