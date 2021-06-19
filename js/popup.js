import {
  ITEM_TYPES
} from './constants.js';

import {
  creatsPluralNames
} from './util.js';

import {
  removeExtra,
  fillPhotoOrDelete
} from './dom-util.js';

const MAP_CANVAS = document.querySelector('#map-canvas');
const SIMILAR_CARD_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderAd = (data) => {
  const cardElement = SIMILAR_CARD_TEMPLATE.cloneNode(true);

  cardElement.querySelector('.popup__type').textContent = ITEM_TYPES[data.offer.type];
  cardElement.querySelector('.popup__avatar').src = data.author.avatar;
  cardElement.querySelector('.popup__title').textContent = data.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = data.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} ${creatsPluralNames(data.offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${data.offer.guests} ${creatsPluralNames(data.offer.guests, ['гостя', 'гостей', 'гостей'])}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin} выезд до ${data.offer.checkout}`;

  const offerFeatureClasses = data.offer.features.map((features) => `popup__feature--${features}`);
  const featureElementList = cardElement.querySelectorAll('.popup__feature');

  removeExtra(featureElementList, offerFeatureClasses);

  cardElement.querySelector('.popup__description').textContent = data.offer.description;

  const POPUP_PHOTOS = cardElement.querySelector('.popup__photos');
  const POPUP_PHOTO = POPUP_PHOTOS.querySelector('.popup__photo');

  fillPhotoOrDelete(data.offer.photos, POPUP_PHOTOS, POPUP_PHOTO);
  MAP_CANVAS.appendChild(cardElement);
};

export {
  renderAd
};
