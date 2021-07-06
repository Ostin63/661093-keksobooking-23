import {
  HOUSING_TYPE,
  HOUSING_PRICE,
  HOUSING_ROOMS,
  HOUSING_GUESTS,
  PRICE_MIN,
  PRICE_MAX
} from './constants.js';

const selectValues = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
};

const features = {
  wifi: false,
  dishwasher: false,
  parking: false,
  washer: false,
  elevator: false,
  conditioner: false,
};

const valuePrice = {
  min: 'low',
  middle: 'middle',
  max: 'high',
};

const SELECTOR_KEYS = Object.keys(selectValues);
const FEATURE_KEYS = Object.keys(features);

const setSelectValue = (name, value) => {
  selectValues[name] = value;
};

const setFeatureValue = (name, value) => {
  features[name] = value;
};

const checkPrice = (value, price) => {
  switch (value) {
    case valuePrice.min:
      if (price > PRICE_MIN) {
        return false;
      }

      break;

    case valuePrice.middle:
      if (price < PRICE_MIN || price >= PRICE_MAX) {
        return false;
      }

      break;

    case valuePrice.max:
      if (price < PRICE_MAX) {
        return false;
      }

      break;
  }
  return true;
};

const filterAds = (ad) => {

  for (const key of SELECTOR_KEYS) {
    const value = selectValues[key];

    if (value !== 'any') {
      if (key !== 'price' && String(ad.offer[key]) !== value) {
        return false;
      }

      if (key === 'price' && !checkPrice(value, ad.offer[key])) {
        return false;
      }
    }
  }

  const adFeatures = ad.offer.features || [];

  for (const feature of FEATURE_KEYS) {
    if (features[feature] && !adFeatures.includes(feature)) {
      return false;
    }
  }

  return true;
};

const resetFilter = () => {
  HOUSING_TYPE.value = 'any';
  HOUSING_PRICE.value = 'any';
  HOUSING_ROOMS.value = 'any';
  HOUSING_GUESTS.value = 'any';
};

export {
  filterAds,
  setSelectValue,
  setFeatureValue,
  resetFilter
};
