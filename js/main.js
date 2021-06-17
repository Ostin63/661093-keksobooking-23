import {
  getAds
} from './data.js';

import {
  renderAds
} from './popup.js';

getAds();
renderAds(getAds[0]);
