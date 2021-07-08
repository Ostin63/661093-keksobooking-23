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
} from './util.js';

const BUTTON_RESET = AD_FORM.querySelector('.ad-form__reset');

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

const onFormSend = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(formData, alertSuccess, resetForm, alertError, DATA_SUBMIT_URL);
};

const onMapOk = () => {
  activeForms();
  addAddress(pinMarkerRed);
  loadData(onLoadData, onError, DATA_URL);
  addEventListeners(debounce((rerenderPins), RERENDER_DELAY));
};

AD_FORM.addEventListener('submit', onFormSend);
BUTTON_RESET.addEventListener('click', onReset);

addEventListenerFotos();
deactiveForms();
addMaps(onMapOk);
