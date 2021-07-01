import {
  NUMBER_OBJECTS
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
getAds(renderPins, onError, NUMBER_OBJECTS);
addsFormSubmitHandler(sendData, alertSuccess, alertError);
