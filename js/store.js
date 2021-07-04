import {
  NUMBER_OBJECTS
} from './constants.js';

import {
  isFunction
} from './util.js';

let importData = null;
let preparedData = null;

const getInitData = () => preparedData;

const prepareData = (filterFn) => {
  preparedData = [...importData];

  if (isFunction(filterFn)) {
    preparedData = preparedData.filter(filterFn);
  }

  preparedData = preparedData.slice(0, NUMBER_OBJECTS);
};

const storeData = (data) => {
  importData = data;
  preparedData =  data;
};

export {
  getInitData,
  storeData,
  prepareData
};
