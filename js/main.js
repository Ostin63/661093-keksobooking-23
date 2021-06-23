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
  pinMarkerRed,
  addMaps,
  addAddress
  // addPinArr
} from './map.js';

const TIME_OUT = 1000;
// const data = getAds(NUMBER_OBJECTS);
// console.log((getAds(NUMBER_OBJECTS)));

deactiveForms();
setTimeout(activeForms, TIME_OUT);
addEventListeners();
// addRandomAddress(data[0].offer.address);
addMaps();
addAddress(pinMarkerRed);
// addPinArr();
