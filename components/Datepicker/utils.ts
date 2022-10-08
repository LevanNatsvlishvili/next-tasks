export const minDate = new Date('01-01-2020');
export const maxDate = new Date('12-31-2030');
const days = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];
const months = [
  'STYCZ',
  'LUT',
  'MAR',
  'KWIE',
  'MAJ',
  'CZERW',
  'LIP',
  'SIERP',
  'WRZES',
  'PAZDZIER',
  'LISTOPAD',
  'GRUD',
];
export const locale = {
  localize: <object>{
    day: (n: number) => days[n],
    months: (n: number) => months[n],
  },
  formatLong: <object>{
    date: () => 'mm/dd/yyyy',
  },
};
