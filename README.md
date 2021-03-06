# Cheap electricity tariff in Poland

The program shows whether there is a cheap electricity tariff now or at a given time and date.

## Main function:

`isCheapTariff = ( dateTime: Date | Dayjs = new Date(), tariff: Tariff = Tariff.Energa_G12W ): boolean`

Exampel (do not forget that in JS, months are counted from '0'):
`isCheapTariff(new Date(2022, 1, 1, 12, 50), Tariff.Energa_G12W)`

## Energa SA and Enea tariffs

### Tariff G12 cheap hours:

_In Enea tariff: The control clocks in the measurement and billing systems are set according to the winter time and do not change during the year, unless the control device automatically maintains the hours during the summer time period as well._

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

_Not included in Enea_

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

## E.On tariffs

### Tariff G12 cheap hours:

- 00:00 - 6:00
- 13:00 - 15:00
- 22:00 - 23:59

### Tariff G12W cheap hours:

- 00:00 - 6:00
- 22:00 - 23:59
- saturdays
- sundays

## Tauron tariffs

### Tariff G12 cheap hours:

**It is not possible to correctly calculate the cheap tariff!**

_8 consecutive hours between 10.00 p.m. and 7.00 a.m. plus 2 consecutive hours from 1 p.m. to 4 p.m._
_The duration of the time zones (start and end hours) in this tariff group is **defined by the Operator.**_

- 00:00 - 7:00
- 13:00 - 16:00
- 22:00 - 23:59

### Tariff G12W cheap hours:

- 00:00 - 6:00
- 13:00 - 15:00
- 22:00 - 23:59
- saturdays
- sundays
- polish public holidays
