import {
  NUMBER_OBJECTS
} from './constants.js';

import {
  getAds
} from './data.js';

import {
  renderAds
} from './popup.js';

const getNewArr = getAds(NUMBER_OBJECTS);

renderAds(getNewArr[0]);
