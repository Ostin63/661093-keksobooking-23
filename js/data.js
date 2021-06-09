import {
  MIN_INDEX,
  NUMBER_MIN,
  ROOM_MAX,
  GUESTS_MAX,
  PRICE_MAX,
  LIMIT_SINGS,
  DESCRIPTIONS,
  NUMBER_OBJECTS,
  TITLES,
  TYPES,
  TIMING,
  FEATURES,
  PHOTOS,
  Location
} from './constants.js';

import {
  getRandomFloat,
  getRandomNumber,
  createAuthorUrl,
  getRandomItem,
  createArrayRandom
} from './util.js';

const getAd = (index) => {
  const lat = getRandomFloat(Location.LAT_MIN, Location.LAT_MAX, LIMIT_SINGS);
  const lng = getRandomFloat(Location.LNG_MIN, Location.LNG_MAX, LIMIT_SINGS);
  const timiming = getRandomItem(TIMING);

  return {
    author: {
      avatar: createAuthorUrl(index),
    },
    offer: {
      title: getRandomItem(TITLES),
      address: `${lat} , ${lng}`,
      price: getRandomNumber(MIN_INDEX, PRICE_MAX),
      type: getRandomItem(TYPES),
      rooms: getRandomNumber(NUMBER_MIN, ROOM_MAX),
      guests: getRandomNumber(NUMBER_MIN, GUESTS_MAX),
      checkin: timiming,
      checkout: timiming,
      features: createArrayRandom(FEATURES),
      description: getRandomItem(DESCRIPTIONS),
      photos: createArrayRandom(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
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
