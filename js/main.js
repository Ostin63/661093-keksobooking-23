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

const getNewArr = getAds(NUMBER_OBJECTS);

renderAd(getNewArr[0]);

deactiveForms();
setTimeout(activeForms, 3000);
