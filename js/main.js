import {
  NUMBER_OBJECTS
} from './constants.js';

import {
  getAds
} from './data.js';

import {
  renderAds
} from './popup.js';


const detAd = getAds(NUMBER_OBJECTS);

renderAds(detAd[0]);
