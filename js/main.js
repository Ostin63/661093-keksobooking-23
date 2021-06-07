const MIN_INDEX = 0;
const NUMBER_MIN = 1;
const ROOM_MAX = 3;
const GUESTS_MAX = 3;
const AVATAR_LENGTH = 8;
const PRICE_MAX = 1000000;
const LOCATION_LAT_MIN = 35.65000;
const LOCATION_LAT_MAX = 35.70000;
const LOCATION_LNG_MIN = 139.70000;
const LOCATION_LNG_MAX = 139.80000;
const LIMIT_SINGS = 5;
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
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];
const CHECKOUTS = [
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
  'Сделан ремотн',
  'Заменена сантехника',
  'Все соседи умерли',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;
const getRandomFloat = (...args) => {
  const [min, max, dec] = args;
  const errorIndex = args.findIndex((value) => !isPositiveNumber(value));
  if (errorIndex >= 0) {
    throw new Error(`Неверный тип по индексу ${errorIndex}.`);
  }
  const pow = Math.pow(10, dec);
  return Math.round((Math.random() * (max - min) + min) * pow) / pow;
};
const getRandomNumber = (min, max) => getRandomFloat(min, max, 0);

const padLeft = (index) => String(index).padStart(2, '0');
const createAuthorUrl = (index) => `img/avatars/user${padLeft(index)}.png`;

const getRandomItem = (items) => items[getRandomNumber(NUMBER_MIN, items.length - 1)];

const random = () => Math.random() < 0.5;
const createArrayRandom = (items) => {
  const array = items.filter(random);
  if (array.length < 1) {
    Math.random() * (items.length);
  }
  return array;
};

const lat = getRandomFloat(LOCATION_LAT_MIN, LOCATION_LAT_MAX, LIMIT_SINGS);
const lng = getRandomFloat(LOCATION_LNG_MIN, LOCATION_LNG_MAX, LIMIT_SINGS);

const getData = () => ({
  author: {
    avatar: createAuthorUrl(AVATAR_LENGTH),
  },
  offer: {
    title: getRandomItem(TITLES),
    address: `${lat} , ${lng}`,
    price: getRandomNumber(MIN_INDEX, PRICE_MAX),
    type: getRandomItem(TYPES),
    rooms: getRandomNumber(NUMBER_MIN, ROOM_MAX),
    guests: getRandomNumber(NUMBER_MIN, GUESTS_MAX),
    checkin: getRandomItem(CHECKINS),
    checkout: getRandomItem(CHECKOUTS),
    features: createArrayRandom(FEATURES),
    description: getRandomItem(DESCRIPTIONS),
    photos: createArrayRandom(PHOTOS),
  },
  location: {
    lat: lat,
    lng: lng,
  },
});
getData();
