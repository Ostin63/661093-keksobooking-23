import {
  MIN_INDEX,
  NUMBER_MIN,
  ROOM_MAX,
  GUESTS_MAX,
  MAX_PRICE,
  LIMIT_SINGS,
  DESCRIPTIONS,
  NUMBER_OBJECTS,
  TITLES,
  TYPES,
  TIMING,
  FEATURES,
  PHOTOS,
  location
} from './constants.js';

import {
  getRandomFloat,
  getRandomNumber,
  createAuthorUrl,
  getRandomItem,
  createArrayRandom
} from './util.js';

const getAd = (index) => {
  const lat = getRandomFloat(location.LAT_MIN, location.LAT_MAX, LIMIT_SINGS);
  const lng = getRandomFloat(location.LNG_MIN, location.LNG_MAX, LIMIT_SINGS);
  const timing = getRandomItem(TIMING);

  return {
    author: {
      avatar: createAuthorUrl(index),
    },
    offer: {
      title: getRandomItem(TITLES),
      address: `${lat} , ${lng}`,
      price: getRandomNumber(MIN_INDEX, MAX_PRICE),
      type: getRandomItem(TYPES),
      rooms: getRandomNumber(NUMBER_MIN, ROOM_MAX),
      guests: getRandomNumber(NUMBER_MIN, GUESTS_MAX),
      checkin: timing,
      checkout: timing,
      features: createArrayRandom(FEATURES),
      description: getRandomItem(DESCRIPTIONS),
      photos: createArrayRandom(PHOTOS),
    },
    location: {
      lat,
      lng,
    },
  };
};

const getAds = () => {
  const ads = [];
  for (let idx = 0; idx < NUMBER_OBJECTS; idx++) {
    ads.push(getAd(idx + 1));
  }
  return ads;
};
export {
  getAds
};
