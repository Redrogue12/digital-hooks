import { atom } from 'recoil';

export const rowsAtom = atom({
  key: 'rows',
  default: 10,
});

export const pageAtom = atom({
  key: 'page',
  default: 1,
});
