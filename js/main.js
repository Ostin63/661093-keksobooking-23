import {
  NUMBER_OBJECTS,
  AD_FORM
} from './constants.js';

import {
  getAds,
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
  resetForm
} from './map.js';

import {
  renderAd
} from './popup.js';

const renderPins = (data) => addPins(data, renderAd);
const BUTTON_RESET = AD_FORM.querySelector('.ad-form__reset');

const sendForm = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(formData, alertSuccess, alertError);
};

deactiveForms();

AD_FORM.addEventListener('submit', sendForm);
BUTTON_RESET.addEventListener('click', resetForm);

const active = activeForms();

addEventListeners();
addMaps(active);
addAddress(pinMarkerRed);
getAds(renderPins, onError, NUMBER_OBJECTS);
