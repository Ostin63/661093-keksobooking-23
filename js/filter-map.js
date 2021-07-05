import {
  HOUSING_TYPE,
  HOUSING_PRICE,
  HOUSING_ROOMS,
  HOUSING_GUESTS
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

const SELECR_KEYS = Object.keys(selectValues);
const FEATURE_KEYS = Object.keys(features);

const setSelectValue = (name, value) => {
  selectValues[name] = value;
};

const setFeatureValue = (name, value) => {
  features[name] = value;
};

const checkPrice = (value, price) => {
  switch (value) {
    case 'low':
      if (price > 10000) {
        return false;
      }

      break;

    case 'middle':
      if (price < 10000 || price >= 50000) {
        return false;
      }

      break;

    case 'high':
      if (price < 50000) {
        return false;
      }

      break;
  }
  return true;
};

const filterAds = (ad) => {

  for (const key of SELECR_KEYS) {
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
