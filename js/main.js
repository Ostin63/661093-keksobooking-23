import {
  getAds
} from './data.js';

import {
  deactiveForms,
  activeForms
} from './dom-util.js';

import {
  addEventListeners
} from './form.js';

import {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPinArr
} from './map.js';

import {
  renderAd
} from './popup.js';

const data = getAds();
deactiveForms();
const active = activeForms();
addEventListeners();
addMaps(active);
addAddress(pinMarkerRed);
addPinArr(data, renderAd);
