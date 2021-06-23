// import {
//   NUMBER_OBJECTS
// } from './constants.js';

// import {
//   getAds
// } from './data.js';

import {
  deactiveForms,
  activeForms
} from './dom-util.js';

import {
  addEventListeners
} from './form.js';

import {
  addMaps,
  addAddress
} from './map.js';

const TIME_OUT = 1000;

deactiveForms();
setTimeout(activeForms, TIME_OUT);
addEventListeners();
// addRandomAddress(data[0].offer.address);
addMaps();
addAddress();
