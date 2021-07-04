import {
  AD_FORM,
  DATA_URL,
  DATA_SUBMIT_URL
} from './constants.js';

import {
  getData,
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
  addEventListeners
} from './form.js';

import {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPins,
  resetForm,
  removePins
} from './map.js';

import {
  renderAd
} from './popup.js';

import {
  getInitData,
  storeData,
  prepareData
} from './store.js';

import {
  filterAds
} from './filter-map.js';

const rerenderPins = () => {
  prepareData(filterAds);
  removePins();
  addPins(getInitData(), renderAd);
};

const onLoadData = (data) => {
  storeData(data);
  prepareData();
  addPins(getInitData(), renderAd);
};
const BUTTON_RESET = AD_FORM.querySelector('.ad-form__reset');

const sendForm = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(formData, alertSuccess, alertError, DATA_SUBMIT_URL);
};

AD_FORM.addEventListener('submit', sendForm);
BUTTON_RESET.addEventListener('click', resetForm);

const onMapOk = () => {
  activeForms();
  addAddress(pinMarkerRed);
  getData(onLoadData, onError, DATA_URL);
};

deactiveForms();
addEventListeners(rerenderPins);
addMaps(onMapOk);
