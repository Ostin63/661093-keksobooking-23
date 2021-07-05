import {
  AD_FORM,
  DATA_URL,
  DATA_SUBMIT_URL,
  RERENDER_DELAY
} from './constants.js';

import {
  loadData,
  sendData
} from './api.js';

import {
  deactiveForms,
  activeForms,
  onError,
  alertSuccess,
  alertError
} from './dom-util.js';

import {
  addEventListeners,
  resetForm
} from './form.js';

import {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPins,
  resetMap,
  removePins
} from './map.js';

import {
  renderAd
} from './popup.js';

import {
  getData,
  storeData,
  prepareData
} from './store.js';

import {
  filterAds,
  resetFilter
} from './filter-map.js';

import {
  addEventListenerFotos,
  resetImage
} from './avatar.js';

import {
  debounce
} from './utils/debounce.js';

const rerenderPins = () => {
  prepareData(filterAds);
  removePins();
  addPins(getData(), renderAd);
};

const onLoadData = (data) => {
  storeData(data);
  prepareData();
  addPins(getData(), renderAd);
};

const reset = (evt) => {
  evt.preventDefault();
  resetMap();
  resetFilter();
  resetForm();
  resetImage();
  removePins();
  prepareData();
  addPins(getData(), renderAd);
};

const BUTTON_RESET = AD_FORM.querySelector('.ad-form__reset');

const sendForm = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(formData, alertSuccess, alertError, DATA_SUBMIT_URL);
};

AD_FORM.addEventListener('submit', sendForm);
BUTTON_RESET.addEventListener('click', reset);

const onMapOk = () => {
  activeForms();
  addAddress(pinMarkerRed);
  loadData(onLoadData, onError, DATA_URL);
};

addEventListenerFotos();
deactiveForms();
addEventListeners(debounce(rerenderPins), RERENDER_DELAY);
addMaps(onMapOk);
