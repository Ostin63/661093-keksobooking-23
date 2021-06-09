import {
  NUMBER_OBJECTS
} from './constants.js';

import { getAd } from './data.js';

const getAds = () => {
  const ads = [];
  for (let idx = 0; idx < NUMBER_OBJECTS; idx++) {
    ads.push(getAd(idx + 1));
  }
  return ads;
};
getAds();
