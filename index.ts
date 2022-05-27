import { isCheapTariff } from './helpers/tariff/tariff';
import { Tariff } from './types/tariff';

console.log(isCheapTariff(new Date(2022, 5, 27, 12, 50), Tariff.Energa_G12W));
console.log(isCheapTariff(new Date(2022, 5, 28, 21, 50), Tariff.Energa_G12W));
console.log(isCheapTariff(new Date(2022, 5, 27, 22, 1), Tariff.Energa_G12W));
