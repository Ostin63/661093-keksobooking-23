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

import'./form.js';

const data = getAds(NUMBER_OBJECTS);

renderAd(data[0]);

deactiveForms();
setTimeout(activeForms, 3000);
