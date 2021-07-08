import {
  DATA_URL,
  RERENDER_DELAY
} from './constants.js';

import {
  loadData
} from './api.js';

import {
  deactiveForms,
  activeForms,
  onError
} from './dom-util.js';

import {
  addEventListeners
} from './form.js';

import {
  pinMarkerRed,
  addMaps,
  addAddress,
  addPins,
  removePins
} from './map.js';

import {
  renderAd
} from './popup.js';

import {
  getData,
  storeData,
  prepareData
} from './store.js';

import {
  filterAds
} from './filter-map.js';

import {
  addEventListenerFotos
} from './avatar.js';

import {
  debounce
} from './util.js';

const rerenderPins = () => {
  prepareData(filterAds);
  removePins();
  addPins(getData(), renderAd);
};

const onLoadData = (data) => {
  storeData(data);
  prepareData();
  addPins(getData(), renderAd);
};

const onMapOk = () => {
  activeForms();
  addAddress(pinMarkerRed);
  loadData(DATA_URL, onLoadData, onError);
  addEventListeners(debounce((rerenderPins), RERENDER_DELAY));
};

addEventListenerFotos();
deactiveForms();
addMaps(onMapOk);
