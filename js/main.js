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
  validatyform,
  validatyTitleElement,
  validatyNumberElement
} from './validity-form.js';

const getNewArr = getAds(NUMBER_OBJECTS);

renderAd(getNewArr[0]);

deactiveForms();
setTimeout(activeForms, 3000);

validatyform(TITLE);
validatyform(PRICE);
validatyTitleElement(TITLE, MIN_NAME_LENGTH, MAX_NAME_LENGTH),
validatyNumberElement(PRICE, MAX_PRICE);
