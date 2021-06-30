import {
  getAds
} from './api.js';

import {
  deactiveForms,
  activeForms,
  onError
} from './dom-util.js';

import {
  addEventListeners
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
