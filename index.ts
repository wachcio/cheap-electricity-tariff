import { isCheapTariff } from './helpers/tariff/tariff';
import { Tariff } from './types/tariff';

console.log(isCheapTariff(new Date(2022, 5, 2, 8, 1), Tariff.G12W));
