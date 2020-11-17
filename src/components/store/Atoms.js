import { atom } from 'recoil';

export const tokenAtom = atom({
  key: 'token',
  default: null,
});

export const businessAtom = atom({
  key: 'business',
  default: null,
});
