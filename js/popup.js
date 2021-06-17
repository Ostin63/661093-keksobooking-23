import {
  ITEM_TYPES
} from './constants.js';

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

  popupFeature.forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
  cardElement.querySelector('.popup__description').textContent = data.offer.description;

  const popupPhotos = cardElement.querySelector('.popup__photos');
  const popupPhoto = popupPhotos.querySelector('.popup__photo');

  if (data.offer.photos.length === 1) {
    popupPhoto.src = data.offer.photos;
  } else if (data.offer.photos.length === 0) {
    popupPhoto.remove();
  } else {
    for (let idx = 0; idx < data.offer.photos.length; idx++) {
      const clonePhoto = popupPhoto.cloneNode(true);
      clonePhoto.src = data.offer.photos[idx];
      popupPhotos.appendChild(clonePhoto);
    }
    popupPhoto.remove();
  }

  mapCanvas.appendChild(cardElement);
};

export {
  renderAds
};
