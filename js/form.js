import {
  TITLE,
  PRICE,
  NameLength,
  MAX_PRICE,
  PRICE_TYPE,
  ROOM_NUMBER,
  GUESTS_NUMBER,
  TYPE,
  TIMEIN,
  TIMEOUT,
  FILTER_MAP,
  MAP_FEATURES
} from './constants.js';

import {
  setFeatureValue,
  setSelectValue
} from './filter-map.js';

const сheckingTitle = () => {
  const valueLength = TITLE.value.length;
  if (valueLength < NameLength.MIN) {
    TITLE.setCustomValidity(`Еще ${NameLength.MIN - valueLength} символов`);
  } else if (valueLength > NameLength.MAX) {
    TITLE.setCustomValidity(`Удалите лишние ${valueLength - NameLength.MAX} символов`);
  } else {
    TITLE.setCustomValidity('');
  }
  TITLE.reportValidity();
};

const сheckingPrice = () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
};

const сheckingRooms = () => {
  const guests = GUESTS_NUMBER.value;
  const rooms = ROOM_NUMBER.value;
  if (rooms === '100' && guests !== '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «не для гостей»');
  } else if (rooms === '3' && guests === '0') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
  } else if (rooms === '1' && guests !== '1') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 1 гостя»');
  } else if (rooms === '2' && guests === '0' || rooms === '2' && guests === '3') {
    GUESTS_NUMBER.setCustomValidity('Значение только «для 2 гостей» или «для 1 гостя»');
  } else {
    GUESTS_NUMBER.setCustomValidity('');
  }
  GUESTS_NUMBER.reportValidity();
};

сheckingRooms();
const addPriceValue = () => {
  PRICE.placeholder = PRICE_TYPE[TYPE.value];
  PRICE.min = PRICE_TYPE[TYPE.value];
};
addPriceValue();

const synchronizeType = () => {
  PRICE.placeholder = PRICE_TYPE[TYPE.value];
  addPriceValue();
};

const synchronizeTimein = () => {
  TIMEOUT.value = TIMEIN.value;
};

const synchronizeTimeout = () => {
  TIMEIN.value = TIMEOUT.value;
};

const getOnFeatureChange = (onChange) => (evt) => {
  const element = evt.target;
  const name = element.value;
  const value = element.checked;

  setFeatureValue(name, value);
  onChange();
};

const getOnFilterChange = (onChange) => (evt) => {
  const element = evt.target;

  if (element.type === 'checkbox') {
    return;
  }
  const name = element.name.split('-')[1];
  const value = element.value;
  setSelectValue(name, value);
  onChange();
};

const addEventListeners = (onFiltersChange) => {
  TITLE.addEventListener('input', сheckingTitle);
  PRICE.addEventListener('input', сheckingPrice);
  ROOM_NUMBER.addEventListener('change', сheckingRooms);
  GUESTS_NUMBER.addEventListener('change', сheckingRooms);
  TYPE.addEventListener('change', synchronizeType);
  TIMEIN.addEventListener('change', synchronizeTimein);
  TIMEOUT.addEventListener('change', synchronizeTimeout);

  const onFilterChange = getOnFilterChange(onFiltersChange);
  const onFeatureChange = getOnFeatureChange(onFiltersChange);

  FILTER_MAP.addEventListener('change', onFilterChange);
  MAP_FEATURES.addEventListener('change', onFeatureChange);
};

export {
  addEventListeners
};
