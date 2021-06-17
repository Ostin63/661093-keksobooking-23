import {
  ITEM_TYPES
} from './constants.js';

import {
  isPresenceElement,
  createUrlPhoto
} from './util.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderAds = (data) => {
  const cardElement = similarCardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__type').textContent = ITEM_TYPES[data.offer.type];
  cardElement.querySelector('.popup__avatar').src = data.author.avatar;
  cardElement.querySelector('.popup__title').textContent = data.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = data.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;

  cardElement.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin} выезд до ${data.offer.checkout}`;

  const modifiers = data.offer.features.map((features) => `popup__feature--${features}`);
  const popupFeature = cardElement.querySelectorAll('.popup__feature');

  isPresenceElement(popupFeature, modifiers);

  cardElement.querySelector('.popup__description').textContent = data.offer.description;

  const popupPhotos = cardElement.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('.popup__photo');

  createUrlPhoto(data, popupPhotos, popupPhoto);
  mapCanvas.appendChild(cardElement);
};

export {
  renderAds
};
