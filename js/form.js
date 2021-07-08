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
  IMAGES_PREVIEW,
  CHECKBOXES,
  AD_FORM,
  DATA_SUBMIT_URL
} from './constants.js';

import {
  renderAd
} from './popup.js';

import {
  getData,
  prepareData
} from './store.js';

import {
  setFeatureValue,
  setSelectValue,
  resetFilter
} from './filter-map.js';

import {
  addPins,
  resetMap,
  removePins
} from './map.js';

import {
  sendData
} from './api.js';

import {
  alertError,
  alertSuccess
} from './dom-util.js';

import {
  resetImage
} from './avatar.js';

const BUTTON_RESET = AD_FORM.querySelector('.ad-form__reset');

const onTitleChange = () => {
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

const onPriceChange = () => {
  const value = PRICE.value;
  if (value >= MAX_PRICE) {
    PRICE.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    PRICE.setCustomValidity('');
  }
  PRICE.reportValidity();
};

const onRoomsChange = () => {
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
  IMAGES_PREVIEW.style = '';

  CHECKBOXES.forEach((checkbox) => checkbox.checked = false);
};

const alert = () => {
  alertSuccess();
  resetForm();
  resetMap();
};

const onFormSend = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(DATA_SUBMIT_URL, formData, alert, alertError);
};

onRoomsChange();
addPriceValue();

const onReset = (evt) => {
  evt.preventDefault();
  resetMap();
  resetFilter();
  resetForm();
  resetImage();
  removePins();
  prepareData();
  addPins(getData(), renderAd);
};

const addEventListeners = (onFiltersChange) => {
  TITLE.addEventListener('input', onTitleChange);
  PRICE.addEventListener('input', onPriceChange);
  ROOM_NUMBER.addEventListener('change', onRoomsChange);
  GUESTS_NUMBER.addEventListener('change', onRoomsChange);
  TYPE.addEventListener('change', onTypeSynchronize );
  TIMEIN.addEventListener('change', onTimeinSynchronize);
  TIMEOUT.addEventListener('change', onTimeoutSynchronize);

  const onFilterChange = getOnFilterChange(onFiltersChange);
  const onFeatureChange = getOnFeatureChange(onFiltersChange);

  FILTER_MAP.addEventListener('change', onFilterChange);
  MAP_FEATURES.addEventListener('change', onFeatureChange);
  AD_FORM.addEventListener('submit', onFormSend);
  BUTTON_RESET.addEventListener('click', onReset);
};

export {
  addEventListeners,
  resetForm
};
