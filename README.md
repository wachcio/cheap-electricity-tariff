# Cheap electricity tariff in Poland

The program shows whether there is a cheap electricity tariff now or at a given time and date.

## Main function:

`isCheapTariff(date: Date, tariff: Tariff);`

Exampel:
`isCheapTariff(new Date(2022, 1, 1, 12, 50), Tariff.Energa_G12W)`

## Energa SA tariffs

### Tariff G12 cheap hours:

- 00:00 - 6:00
- 13:00 - 15:00
- 22:00 - 23:59

### Tariff G12W cheap hours:

- 00:00 - 6:00
- 13:00 - 15:00
- 22:00 - 23:59
- saturdays
- sundays
- polish public holidays

### Tariff G12R cheap hours:

- 00:00 - 7:00
- 13:00 - 16:00
- 22:00 - 23:59

## PGE tariffs

### Tariff G12 cheap hours:

- 00:00 - 6:00
- 13:00 - 15:00
- 22:00 - 23:59

### Tariff G12W cheap hours:

- 00:00 - 6:00
- 13:00 - 15:00
- 22:00 - 23:59
- saturdays
- sundays

### Tariff G12N cheap hours:

- 1:00 - 5:00
- sundays
