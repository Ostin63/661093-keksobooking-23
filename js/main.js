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
  addEventListeners,
  addsFormSubmitHandler
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

deactiveForms();

BUTTON_RESET.addEventListener('click', resetForm);

const active = activeForms();

addEventListeners();
addMaps(active);
addAddress(pinMarkerRed);
getAds(renderPins, onError, NUMBER_OBJECTS);
addsFormSubmitHandler(sendData, alertSuccess, alertError);
