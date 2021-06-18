import {
  ITEM_TYPES,
  MAP_CANVAS,
  SIMILAR_CARD_TEMPLATE
} from './constants.js';

import {
  isPresenceElement,
  addUrlPhoto,
  creatPluralNames
} from './util.js';

const renderAds = (data) => {
  const cardElement = SIMILAR_CARD_TEMPLATE.cloneNode(true);

  cardElement.querySelector('.popup__type').textContent = ITEM_TYPES[data.offer.type];
  cardElement.querySelector('.popup__avatar').src = data.author.avatar;
  cardElement.querySelector('.popup__title').textContent = data.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = data.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} ${creatPluralNames(data.offer.rooms, ['комната', 'комнаты', 'комнат'])} для ${data.offer.guests} ${creatPluralNames(data.offer.guests, ['гостя', 'гостей', 'гостей'])}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin} выезд до ${data.offer.checkout}`;

  const modifiers = data.offer.features.map((features) => `popup__feature--${features}`);
  const popupFeature = cardElement.querySelectorAll('.popup__feature');

  isPresenceElement(popupFeature, modifiers);

  cardElement.querySelector('.popup__description').textContent = data.offer.description;

  const POPUP_PHOTOS = cardElement.querySelector('.popup__photos');
  const POPUP_PHOTO = POPUP_PHOTOS.querySelector('.popup__photo');

  addUrlPhoto(data, POPUP_PHOTOS, POPUP_PHOTO);
  MAP_CANVAS.appendChild(cardElement);
};

export {
  renderAds
};
