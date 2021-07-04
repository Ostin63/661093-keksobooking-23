import {
  HOUSING_TYPE,
  HOUSING_PRICE,
  HOUSING_ROOMS,
  HOUSING_GUESTS,
  CHECKBOXES
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
  const selectKeys = Object.keys(selectValues);

  for (const key of selectKeys) {
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

  const featureKeys = Object.keys(features);
  const adFeatures = ad.offer.features || [];

  for (const feature of featureKeys) {
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

  CHECKBOXES.forEach((checkbox) => checkbox.checked = false);
};

export {
  filterAds,
  setSelectValue,
  setFeatureValue,
  resetFilter
};
