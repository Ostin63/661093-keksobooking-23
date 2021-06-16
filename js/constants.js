const MIN_INDEX = 0;
const NUMBER_MIN = 1;
const STRUNG_INDEX = 2;
const ROOM_MAX = 3;
const GUESTS_MAX = 3;
const NUMBER_OBJECTS = 10;
const PRICE_MAX = 1000000;
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
const Location = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
};

export {
  MIN_INDEX,
  NUMBER_MIN,
  STRUNG_INDEX,
  ROOM_MAX,
  GUESTS_MAX,
  NUMBER_OBJECTS,
  PRICE_MAX,
  LIMIT_SINGS,
  DESCRIPTIONS
};

export {
  TITLES,
  TYPES,
  TIMING,
  FEATURES,
  PHOTOS,
  Location
};
