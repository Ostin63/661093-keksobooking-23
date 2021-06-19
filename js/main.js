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
  deactivationForm,
  activationForm
} from './get-form.js';

const getNewArr = getAds(NUMBER_OBJECTS);

renderAd(getNewArr[0]);

deactivationForm();
activationForm();
