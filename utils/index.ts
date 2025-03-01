import { Rand } from './utils';

export const rand: Rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
