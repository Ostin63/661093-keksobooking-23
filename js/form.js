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
  MAP_FEATURES,
  DESCRIPTION,
  PREVIEW,
  CHECKBOXES
} from './constants.js';

import {
  setFeatureValue,
  setSelectValue
} from './filter-map.js';

const onTitleCheck = () => {
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

const onPriceCheck = () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
};

const onRoomsCheck = () => {
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

const addPriceValue = () => {
  PRICE.placeholder = PRICE_TYPE[TYPE.value];
  PRICE.min = PRICE_TYPE[TYPE.value];
};

const onTypeSynchronize  = () => {
  PRICE.placeholder = PRICE_TYPE[TYPE.value];
  addPriceValue();
};

const onTimeinSynchronize = () => {
  TIMEOUT.value = TIMEIN.value;
};

const onTimeoutSynchronize = () => {
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

const resetForm = () => {
  TITLE.value = '';
  DESCRIPTION.value = '';
  PRICE.value = '';
  ROOM_NUMBER.value = '1';
  GUESTS_NUMBER.value = '1';
  TYPE.value = 'flat';
  TIMEIN.value = '12:00';
  TIMEOUT.value = '12:00';
  PREVIEW.src = 'img/muffin-grey.svg';

  CHECKBOXES.forEach((checkbox) => checkbox.checked = false);
};

onRoomsCheck();
addPriceValue();

const addEventListeners = (onFiltersChange) => {
  TITLE.addEventListener('input', onTitleCheck);
  PRICE.addEventListener('input', onPriceCheck);
  ROOM_NUMBER.addEventListener('change', onRoomsCheck);
  GUESTS_NUMBER.addEventListener('change', onRoomsCheck);
  TYPE.addEventListener('change', onTypeSynchronize );
  TIMEIN.addEventListener('change', onTimeinSynchronize);
  TIMEOUT.addEventListener('change', onTimeoutSynchronize);

  const onFilterChange = getOnFilterChange(onFiltersChange);
  const onFeatureChange = getOnFeatureChange(onFiltersChange);

  FILTER_MAP.addEventListener('change', onFilterChange);
  MAP_FEATURES.addEventListener('change', onFeatureChange);
};

export {
  addEventListeners,
  resetForm
};
