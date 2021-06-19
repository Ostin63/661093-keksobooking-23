import {
  STRUNG_INDEX,
  NUMBER_MIN
} from './constants.js';

const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;

const getRandomFloat = (...args) => {
  const errorIndex = args.findIndex((value) => !isPositiveNumber(value));

  if (errorIndex >= 0) {
    throw new Error(`Неверный тип по индексу ${errorIndex}.`);
  }
  const [min, max, dec] = args;
  const pow = Math.pow(10, dec);

  return Math.round((Math.random() * (max - min) + min) * pow) / pow;
};

const getRandomNumber = (min, max) => getRandomFloat(min, max, 0);

const padLeft = (index) => String(index).padStart(STRUNG_INDEX, '0');

const createAuthorUrl = (index) => `img/avatars/user${padLeft(index)}.png`;

const getRandomItem = (items) => items[getRandomNumber(NUMBER_MIN, items.length - 1)];

const getRandomBoolean = () => Math.random() < 0.5;

const createArrayRandom = (items) => {
  const array = items.filter(getRandomBoolean);

  if (array.length < 1) {
    Math.random() * (items.length);
  }

  return array;
};

const creatsPluralNames = (value, words) => {
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) { return words[2]; }
  if (num > 1 && num < 5) { return words[1]; }
  if (num === 1) { return words[0]; }
  return words[2];
};

export {
  getRandomFloat,
  getRandomNumber,
  createAuthorUrl,
  getRandomItem,
  createArrayRandom,
  creatsPluralNames
};
