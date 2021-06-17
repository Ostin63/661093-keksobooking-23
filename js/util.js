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

const isPresenceElement = (element, isElement) => {
  element.forEach((item) => {

    const modifier = item.classList[1];

    if (!isElement.includes(modifier)) {
      item.remove();
    }
  });
};

const createUrlPhoto = (ads, block, element) => {
  if (ads.offer.photos.length === 1) {
    element.src = ads.offer.photos;
  } else if (ads.offer.photos.length === 0) {
    element.remove();
  } else {
    for (let idx = 0; idx < ads.offer.photos.length; idx++) {
      const clonePhoto = element.cloneNode(true);
      clonePhoto.src = ads.offer.photos[idx];
      block.appendChild(clonePhoto);
    }
    element.remove();
  }
};

export {
  getRandomFloat,
  getRandomNumber,
  createAuthorUrl,
  getRandomItem,
  createArrayRandom,
  isPresenceElement,
  createUrlPhoto
};
