import {
  MIN_INDEX,
  NUMBER_MIN,
  NUMBER_OBJECTS,
  ROOM_MAX,
  GUESTS_MAX,
  MAX_PRICE,
  LIMIT_SINGS,
  DESCRIPTIONS,
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
  createArrayRandom,
  fillBy
} from './util.js';


const getAd = (index) => {
  const lat = getRandomFloat(Location.LAT_MIN, Location.LAT_MAX, LIMIT_SINGS);
  const lng = getRandomFloat(Location.LNG_MIN, Location.LNG_MAX, LIMIT_SINGS);
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

const getAds =()=> fillBy(getAd, NUMBER_OBJECTS);


export {
  getAds
};
