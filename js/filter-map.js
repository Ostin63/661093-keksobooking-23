import {
  HOUSING_TYPE,
  HOUSING_PRICE,
  HOUSING_ROOMS,
  HOUSING_GUESTS,
  Price
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

const VALUE_PRICE = {
  min: 'low',
  middle: 'middle',
  max: 'high',
};

const VALUE_KEYS = {
  any: 'any',
  price: 'price',
};

const PARAM = {
  any: 'any',
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
    case VALUE_PRICE.min:
      if (price > Price.min) {
        return false;
      }

      break;

    case VALUE_PRICE.middle:
      if (price < Price.min || price >= Price.mid) {
        return false;
      }

      break;

    case VALUE_PRICE.max:
      if (price < Price.mid) {
        return false;
      }

      break;
  }
  return true;
};

const filterAds = (ad) => {

  for (const key of SELECTOR_KEYS) {
    const value = selectValues[key];

    if (value !== VALUE_KEYS.any) {
      if (key !== VALUE_KEYS.price && String(ad.offer[key]) !== value) {
        return false;
      }

      if (key === VALUE_KEYS.price && !checkPrice(value, ad.offer[key])) {
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
  HOUSING_TYPE.value = PARAM.any;
  HOUSING_PRICE.value = PARAM.any;
  HOUSING_ROOMS.value = PARAM.any;
  HOUSING_GUESTS.value = PARAM.any;
};

export {
  filterAds,
  setSelectValue,
  setFeatureValue,
  resetFilter
};
