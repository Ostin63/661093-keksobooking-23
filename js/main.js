import {
  NUMBER_OBJECTS
} from './constants.js';

import {
  getAds
} from './data.js';

import {
  renderAd
} from './popup.js';

import {
  deactiveForms,
  activeForms
} from './dom-util.js';

import {
  addEventListeners
} from './form.js';

const data = getAds(NUMBER_OBJECTS);
const TIME_OUT = 1000;

renderAd(data[0]);

deactiveForms();
setTimeout(activeForms, TIME_OUT);
addEventListeners();
