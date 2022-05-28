import { isCheapTariff } from '../helpers/tariff/tariff';
import { Tariff } from '../types/tariff';

test('Is cheap tariff in Energa', async () => {
  expect(isCheapTariff(new Date(2022, 12, 25, 12, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 12, 26, 12, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 12, 27, 12, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 12, 28, 12, 50), Tariff.Energa_G12W)).toBeFalsy();
  expect(isCheapTariff(new Date(2022, 12, 28, 22, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 12, 28, 13, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 1, 1, 9, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 1, 6, 11, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 2, 4, 11, 50), Tariff.Energa_G12W)).toBeFalsy();
  expect(isCheapTariff(new Date(2022, 2, 4, 13, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 1, 4, 3, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2032, 1, 4, 3, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2032, 1, 4, 16, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2032, 1, 2, 16, 50), Tariff.Energa_G12W)).toBeFalsy();
  expect(isCheapTariff(new Date(2024, 8, 15, 16, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2023, 11, 11, 16, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 4, 17, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 4, 18, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2023, 4, 10, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2024, 4, 1, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2025, 4, 21, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2026, 4, 6, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(), Tariff.Energa_G12W)).toBeTruthy();
});
