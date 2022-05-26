// import { holidays } from './helpers/polishHolidays/holidays';

import { isCheapTariff } from './helpers/tariff/tariff';
import { Tariff } from './types/tariff';

// console.log(holidays);

console.log(isCheapTariff(new Date(2022, 5, 2, 6, 1), Tariff.G12R));
