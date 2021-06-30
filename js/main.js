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
  submitForm
} from './form.js';

import {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPins
} from './map.js';

import {
  renderAd
} from './popup.js';

const renderPins = (data) => addPins(data, renderAd);

deactiveForms();

const active = activeForms();

addEventListeners();
addMaps(active);
addAddress(pinMarkerRed);
getAds(renderPins, onError);
submitForm(sendData, alertSuccess, alertError);
