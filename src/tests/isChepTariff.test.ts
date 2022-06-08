import { isCheapTariff } from '../helpers/tariff/tariff';
import { Tariff } from '../types/tariff';

test('Is cheap tariff in Energa', async () => {
  expect(isCheapTariff()).toBeTruthy();
  expect(isCheapTariff(new Date())).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 11, 25, 12, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 11, 26, 12, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 11, 27, 12, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 11, 28, 12, 50), Tariff.Energa_G12W)).toBeFalsy();
  expect(isCheapTariff(new Date(2022, 11, 28, 22, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 11, 28, 13, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 0, 1, 9, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 0, 6, 11, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 1, 4, 11, 50), Tariff.Energa_G12W)).toBeFalsy();
  expect(isCheapTariff(new Date(2022, 1, 4, 13, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 0, 4, 3, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2032, 0, 4, 3, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2032, 0, 4, 16, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2032, 0, 2, 16, 50), Tariff.Energa_G12W)).toBeFalsy();
  expect(isCheapTariff(new Date(2024, 7, 15, 16, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2023, 10, 11, 16, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 3, 17, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2022, 3, 18, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2023, 3, 10, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2024, 3, 1, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2025, 3, 21, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
  expect(isCheapTariff(new Date(2026, 3, 6, 10, 50), Tariff.Energa_G12W)).toBeTruthy();
});
