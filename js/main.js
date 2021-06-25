import {
  NUMBER_OBJECTS
} from './constants.js';

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

// const TIME_OUT = 1000;
const data = getAds(NUMBER_OBJECTS);

const renderCart = (idx) => {
  // eslint-disable-next-line no-console
  console.log(idx);
};

const cart = renderAd(data[renderCart]);

deactiveForms();
// setTimeout(activeForms, TIME_OUT);
const active = activeForms();
addEventListeners();
// addRandomAddress(data[0].offer.address);
addMaps(active);
addAddress(pinMarkerRed);
addPinArr(cart);
