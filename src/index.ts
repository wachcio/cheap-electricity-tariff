import { isCheapTariff } from './helpers/tariff/tariff';
import { Tariff } from './types/tariff';

// console.log(isCheapTariff());
// console.log(isCheapTariff(new Date(2022, 11, 25, 12, 50), Tariff.Energa_G12W));
// console.log(isCheapTariff(new Date(2024, 11, 26, 12, 50), Tariff.Energa_G12W));
// console.log(isCheapTariff(new Date(2024, 11, 27, 12, 50), Tariff.Energa_G12W));
// console.log(isCheapTariff(new Date(2022, 11, 26, 21, 50), Tariff.PGE_G12W));
// console.log(isCheapTariff(new Date(2024, 0, 1, 22, 1), Tariff.Energa_G12W));
// console.log(isCheapTariff(new Date(2022, 4, 27, 22, 1), Tariff.PGE_G12N));
// console.log(isCheapTariff(new Date(2022, 4, 27, 1, 1), Tariff.PGE_G12N));
// console.log(isCheapTariff(new Date(2022, 4, 29, 11, 1), Tariff.PGE_G12N));
export { Tariff, isCheapTariff };
