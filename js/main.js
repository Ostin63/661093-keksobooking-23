import {
  NUMBER_OBJECTS
} from './constants.js';

import {
  getAds
} from './data.js';

import {
  renderAd
} from './popup.js';

const getNewArr = getAds(NUMBER_OBJECTS);

renderAd(getNewArr[0]);
