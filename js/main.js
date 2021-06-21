import {
  NUMBER_OBJECTS,
  MIN_NAME_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PRICE
} from './constants.js';

import {
  getAds
} from './data.js';

import {
  renderAd
} from './popup.js';


import {
  deactiveForms,
  activeForms,
  TITLE,
  PRICE
} from './dom-util.js';

import {
  validateform,
  validateTitleElement,
  validateNumberElement
} from './form.js';

const data = getAds(NUMBER_OBJECTS);

renderAd(data[0]);

deactiveForms();
setTimeout(activeForms, 3000);

validateform(TITLE);
validateform(PRICE);
validateTitleElement(TITLE, MIN_NAME_LENGTH, MAX_NAME_LENGTH),
validateNumberElement(PRICE, MAX_PRICE);
