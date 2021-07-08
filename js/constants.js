const STRUNG_INDEX = 2;
const ROOM_MAX = 3;
const GUESTS_MAX = 3;
const NUMBER_OBJECTS = 10;
const ZOOM_START = 12;
const PRICE_MIN = 10000;
const PRICE_MAX = 50000;
const MAX_PRICE = 1000000;
const RERENDER_DELAY = 500;
const LIMIT_SINGS = 5;
const DATA_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const DATA_SUBMIT_URL = 'https://23.javascript.pages.academy/keksobooking';
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
const NameLength = {
  MIN: 30,
  MAX: 100,
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
const PREVIEW = AD_FORM.querySelector('.ad-form-header__preview img');
const IMAGES_PREVIEW = AD_FORM.querySelector('.ad-form__photo');
const TITLE = AD_FORM.querySelector('#title');
const PRICE = AD_FORM.querySelector('#price');
const DESCRIPTION = AD_FORM.querySelector('#description');
const ROOM_NUMBER = AD_FORM.querySelector('#room_number');
const GUESTS_NUMBER = AD_FORM.querySelector('#capacity');
const TYPE = AD_FORM.querySelector('#type');
const TIMEIN = AD_FORM.querySelector('#timein');
const TIMEOUT = AD_FORM.querySelector('#timeout');
const FILTER_MAP = document.querySelector('.map__filters');
const MAP_FEATURES = FILTER_MAP.querySelector('.map__features');
const HOUSING_TYPE = FILTER_MAP.querySelector('#housing-type');
const HOUSING_PRICE = FILTER_MAP.querySelector('#housing-price');
const HOUSING_ROOMS = FILTER_MAP.querySelector('#housing-rooms');
const HOUSING_GUESTS = FILTER_MAP.querySelector('#housing-guests');
const CHECKBOXES = document.querySelectorAll('input[type=checkbox]');

const PRICE_TYPE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

export {
  STRUNG_INDEX,
  ROOM_MAX,
  GUESTS_MAX,
  NUMBER_OBJECTS,
  ZOOM_START,
  LIMIT_SINGS,
  TYPES,
  TIMING,
  FEATURES,
  ITEM_TYPES,
  ROOMS,
  GUESTS,
  NameLength,
  MAX_PRICE,
  AD_FORM,
  TITLE,
  PRICE,
  PRICE_TYPE,
  DESCRIPTION,
  ROOM_NUMBER,
  GUESTS_NUMBER,
  TYPE,
  TIMEIN,
  TIMEOUT,
  DATA_URL,
  DATA_SUBMIT_URL,
  FILTER_MAP,
  MAP_FEATURES,
  HOUSING_TYPE,
  HOUSING_PRICE,
  HOUSING_ROOMS,
  HOUSING_GUESTS,
  CHECKBOXES,
  PREVIEW,
  IMAGES_PREVIEW,
  RERENDER_DELAY,
  PRICE_MIN,
  PRICE_MAX
};
