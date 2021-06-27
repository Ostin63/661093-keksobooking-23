const MIN_INDEX = 0;
const NUMBER_MIN = 1;
const STRUNG_INDEX = 2;
const ROOM_MAX = 3;
const GUESTS_MAX = 3;
const NUMBER_OBJECTS = 10;
const MAX_PRICE = 1000000;
const LIMIT_SINGS = 5;
const PHOTO_PATH = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
const TITLES = [
  'Уютная квартира',
  'Квартира в ценре города',
  'Квартира в тихом районе',
  'Квартира не далеко от метро',
  'Квартира рядом школа и детский сад',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIMING = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Офигительное жильё',
  'Лучше небывает',
  'Сделан ремонт',
  'Заменена сантехника',
  'Все соседи умерли',
];
const PHOTOS = [
  `${PHOTO_PATH}duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTO_PATH}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTO_PATH}claire-rendall-b6kAwr1i0Iw.jpg`,
];
const NameLength = {
  MIN: 30,
  MAX: 100,
};
const Location = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
};
const ITEM_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};
const ROOMS = [
  'комната',
  'комнаты',
  'комнат',
];
const GUESTS = [
  'гостя',
  'гостей',
  'гостей',
];

const AD_FORM = document.querySelector('.ad-form');
const TITLE = AD_FORM.querySelector('#title');
const PRICE = AD_FORM.querySelector('#price');

const PRICE_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const START_COORDS = {
  LAT: 35.68378,
  LNG: 139.75423,
};

export {
  MIN_INDEX,
  NUMBER_MIN,
  STRUNG_INDEX,
  ROOM_MAX,
  GUESTS_MAX,
  NUMBER_OBJECTS,
  LIMIT_SINGS,
  DESCRIPTIONS,
  TITLES,
  TYPES,
  TIMING,
  FEATURES,
  PHOTOS,
  ITEM_TYPES,
  Location,
  ROOMS,
  GUESTS,
  NameLength,
  MAX_PRICE,
  AD_FORM,
  TITLE,
  PRICE,
  PRICE_TYPE,
  START_COORDS
};
