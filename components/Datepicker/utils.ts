export const minDate = new Date('01-01-2020');
export const maxDate = new Date('12-31-2030');
const days = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];
export const locale = {
  localize: {
    day: (n: number) => days[n],
  },
  formatLong: {
    date: () => 'mm/dd/yyyy',
  },
};

interface monthsTypes {
  en: object;
  pl: object;
}

export const months: monthsTypes = {
  en: {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  },
  pl: {
    0: 'STYCZ',
    1: 'LUT',
    2: 'MAR',
    3: 'KWIE',
    4: 'MAJ',
    5: 'CZERW',
    6: 'LIP',
    7: 'SIERP',
    8: 'WRZES',
    9: 'PAZDZIER',
    10: 'LISTOPAD',
    11: 'GRUD',
  },
};
