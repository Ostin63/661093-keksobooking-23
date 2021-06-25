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

import {
  createGetItem
} from './util.js';

// const TIME_OUT = 1000;
const ads = getAds(NUMBER_OBJECTS);
const getAd = createGetItem(ads);


const renderCart = (idx) => renderAd(getAd(idx));

deactiveForms();
// setTimeout(activeForms, TIME_OUT);
const active = activeForms();
addEventListeners();
// addRandomAddress(data[0].offer.address);
addMaps(active);
addAddress(pinMarkerRed);
addPinArr(ads, renderCart);
