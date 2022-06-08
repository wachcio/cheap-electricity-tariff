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
  { day: 1, month: 0 },
  { day: 6, month: 0 },
  { day: 19, month: 1 },
  { day: 1, month: 2 },
  { day: 24, month: 2 },
  { day: 14, month: 3 },
  { day: 1, month: 4 },
  { day: 3, month: 4 },
  { day: 8, month: 4 },
  { day: 12, month: 6 },
  { day: 1, month: 7 },
  { day: 15, month: 7 },
  { day: 31, month: 7 },
  { day: 19, month: 9 },
  { day: 1, month: 10 },
  { day: 11, month: 10 },
  { day: 25, month: 11 },
  { day: 26, month: 11 },
  { day: 27, month: 11 },
];

const EasterMondays: Holiday[] = getArrayOfEasterMonday(2022, 2042);

export const holidays = [...publicHolidays, ...EasterMondays];
